import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ScoreService } from '../services/score.service';

interface SaveScoreDto {
  userId: number;
  username: string;
  score: number;
}

@Controller('scores')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  async saveScore(@Body() data: SaveScoreDto) {
    return this.scoreService.saveScore(data.username, data.userId, data.score);
  }

  @Get('leaderboard')
  async getLeaderboard() {
    return this.scoreService.getLeaderboard();
  }

  @Get('user/:userId/best')
  async getUserBestScore(@Param('userId') userId: number) {
    return this.scoreService.getUserBestScore(userId);
  }
} 