import { Router } from 'express';
import Lead from '../models/lead';

const router = Router();

router.get('/', async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

router.post('/', async (req, res) => {
  const lead = new Lead(req.body);
  await lead.save();
  res.status(201).json(lead);
});

export default router;
