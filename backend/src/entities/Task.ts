import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  dueDate!: Date;

  @Column({ default: false })
  completed!: boolean;

  @Column()
  assignedTo!: string;
}
