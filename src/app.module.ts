import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoreController } from './controllers/score.controller';
import { ScoreService } from './services/score.service';
import { Score } from './entities/score.entity';
import dbConfig from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dbConfig,
      entities: [Score],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Score])
  ],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class AppModule {} 