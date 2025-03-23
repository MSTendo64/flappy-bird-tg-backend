import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from '../entities/score.entity';

@Injectable()
export class ScoreService {
  constructor(
    @InjectRepository(Score)
    private scoreRepository: Repository<Score>,
  ) {}

  async saveScore(username: string, userId: number, score: number): Promise<Score> {
    // Проверяем, существует ли уже пользователь
    const existingUser = await this.scoreRepository.findOne({
      where: { userId }
    });

    if (existingUser) {
      // Если результат лучше предыдущего, обновляем его
      if (score > existingUser.score) {
        existingUser.score = score;
        return this.scoreRepository.save(existingUser);
      }
      return existingUser;
    }

    // Если пользователь новый, создаем новую запись
    const newScore = this.scoreRepository.create({
      username,
      userId,
      score,
    });
    
    return this.scoreRepository.save(newScore);
  }

  async getLeaderboard(): Promise<Score[]> {
    return await this.scoreRepository.find({
      order: {
        score: 'DESC',
      },
      select: ['id', 'username', 'score', 'userId']
    });
  }

  async getUserBestScore(userId: number): Promise<number> {
    const bestScore = await this.scoreRepository.findOne({
      where: { userId },
      order: { score: 'DESC' },
      select: ['score'],
    });
    
    return bestScore?.score || 0;
  }
} 