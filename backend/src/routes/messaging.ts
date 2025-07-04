import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Message } from '../entities/Message';

const router = Router();
const repo = AppDataSource.getRepository(Message);

router.get('/', async (_req, res) => {
  const messages = await repo.find();
  res.json(messages);
});

router.post('/', async (req, res) => {
  const message = repo.create(req.body);
  const result = await repo.save(message);
  res.status(201).json(result);
});

export default router;
