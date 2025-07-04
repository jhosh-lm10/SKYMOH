import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { ChatMessage } from '../entities/ChatMessage';

const router = Router();
const repo = AppDataSource.getRepository(ChatMessage);

router.get('/', async (_req, res) => {
  const messages = await repo.find({ order: { timestamp: 'ASC' } });
  res.json(messages);
});

router.post('/', async (req, res) => {
  const msg = repo.create(req.body);
  const result = await repo.save(msg);
  res.status(201).json(result);
});

export default router;
