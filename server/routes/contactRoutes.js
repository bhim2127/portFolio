import express from 'express';
import { createContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

// Routes for contact
router.post('/contact', (req, res, next) => {
  console.log('Received POST request at /api/contact:', req.body); // Debug log
  next();
}, createContact);
console.log('POST /contact route registered'); // Debug
router.get('/contact', getContacts);    // GET all contact messages (optional)

export default router;
