import { Repository } from 'typeorm';
import { Score } from '../entities/score.entity';
export declare class ScoreService {
    private scoreRepository;
    constructor(scoreRepository: Repository<Score>);
    saveScore(username: string, userId: number, score: number): Promise<Score>;
    getLeaderboard(): Promise<Score[]>;
    getUserBestScore(userId: number): Promise<number>;
}
