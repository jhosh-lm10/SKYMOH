import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Contact } from './Contact';

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  status!: string;

  @ManyToOne(() => Contact)
  contact!: Contact;
}
