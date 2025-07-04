import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Lead } from '../entities/Lead';

const router = Router();
const repo = AppDataSource.getRepository(Lead);

router.get('/', async (_req, res) => {
  const leads = await repo.find({ relations: ['contact'] });
  res.json(leads);
});

router.post('/', async (req, res) => {
  const lead = repo.create(req.body);
  const result = await repo.save(lead);
  res.status(201).json(result);
});

export default router;
