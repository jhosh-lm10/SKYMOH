import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class ChatMessage {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user!: string;

  @Column()
  content!: string;

  @CreateDateColumn()
  timestamp!: Date;
}
