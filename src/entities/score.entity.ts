import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Unique } from 'typeorm';

@Entity()
@Unique(['userId'])
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  userId: number;

  @Column()
  score: number;

  @CreateDateColumn()
  createdAt: Date;
} 