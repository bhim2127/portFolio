import express from 'express';
import { createContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

// Routes for contact
router.post('/contact', createContact); // POST create a new contact message
router.get('/contact', getContacts);    // GET all contact messages (optional)

export default router;
