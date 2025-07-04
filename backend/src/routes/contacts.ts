import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Contact } from '../entities/Contact';

const router = Router();
const repo = AppDataSource.getRepository(Contact);

router.get('/', async (_req, res) => {
  const contacts = await repo.find();
  res.json(contacts);
});

router.post('/', async (req, res) => {
  const contact = repo.create(req.body);
  const result = await repo.save(contact);
  res.status(201).json(result);
});

export default router;
