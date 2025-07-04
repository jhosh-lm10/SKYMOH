import { Router } from 'express';
import Contact from '../models/contact';

const router = Router();

router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

router.post('/', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json(contact);
});

export default router;
