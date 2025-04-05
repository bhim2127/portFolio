import express from 'express';
import { createContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

// Routes for contact
router.post('/contact', createContact); // POST create a new contact message
console.log('POST /contact route registered'); // Debug
router.get('/contact', getContacts);    // GET all contact messages (optional)

export default router;
