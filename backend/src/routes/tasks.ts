import { Router } from 'express';
import Task from '../models/task';

const router = Router();

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

export default router;
