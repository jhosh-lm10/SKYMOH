import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Task } from '../entities/Task';

const router = Router();
const repo = AppDataSource.getRepository(Task);

router.get('/', async (_req, res) => {
  const tasks = await repo.find();
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const task = repo.create(req.body);
  const result = await repo.save(task);
  res.status(201).json(result);
});

export default router;
