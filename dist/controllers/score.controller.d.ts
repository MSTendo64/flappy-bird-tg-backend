import { ScoreService } from '../services/score.service';
interface SaveScoreDto {
    userId: number;
    username: string;
    score: number;
}
export declare class ScoreController {
    private readonly scoreService;
    constructor(scoreService: ScoreService);
    saveScore(data: SaveScoreDto): Promise<import("../entities/score.entity").Score>;
    getLeaderboard(): Promise<import("../entities/score.entity").Score[]>;
    getUserBestScore(userId: number): Promise<number>;
}
export {};
