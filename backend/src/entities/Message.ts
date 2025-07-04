import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  sender!: string;

  @Column()
  recipient!: string;

  @Column()
  content!: string;

  @CreateDateColumn()
  timestamp!: Date;
}
