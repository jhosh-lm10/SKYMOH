import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Contact } from './entities/Contact';
import { Lead } from './entities/Lead';
import { Message } from './entities/Message';
import { Task } from './entities/Task';
import { ChatMessage } from './entities/ChatMessage';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Contact, Lead, Message, Task, ChatMessage],
  synchronize: false,
});
