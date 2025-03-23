"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const score_entity_1 = require("../entities/score.entity");
let ScoreService = class ScoreService {
    scoreRepository;
    constructor(scoreRepository) {
        this.scoreRepository = scoreRepository;
    }
    async saveScore(username, userId, score) {
        const existingUser = await this.scoreRepository.findOne({
            where: { userId }
        });
        if (existingUser) {
            if (score > existingUser.score) {
                existingUser.score = score;
                return this.scoreRepository.save(existingUser);
            }
            return existingUser;
        }
        const newScore = this.scoreRepository.create({
            username,
            userId,
            score,
        });
        return this.scoreRepository.save(newScore);
    }
    async getLeaderboard() {
        return await this.scoreRepository.find({
            order: {
                score: 'DESC',
            },
            select: ['id', 'username', 'score', 'userId']
        });
    }
    async getUserBestScore(userId) {
        const bestScore = await this.scoreRepository.findOne({
            where: { userId },
            order: { score: 'DESC' },
            select: ['score'],
        });
        return bestScore?.score || 0;
    }
};
exports.ScoreService = ScoreService;
exports.ScoreService = ScoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(score_entity_1.Score)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ScoreService);
//# sourceMappingURL=score.service.js.map