export class SaveScoreDto {
  userId: number;
  username: string;
  score: number;
}

export class ScoreResponseDto {
  id: number;
  username: string;
  score: number;
  createdAt: Date;
} 