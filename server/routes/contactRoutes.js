import express from 'express';
import { createContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

// Routes for contact
router.post('/', createContact); // POST create a new contact message
router.get('/', getContacts); // GET all contact messages (optional)

export default router;