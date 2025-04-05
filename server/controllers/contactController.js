import Contact from '../models/Contact.js';
import { sendEmail } from '../utils/sendEmail.js';

// Create a new contact message
export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Backend email validation
    const validateEmail = (email) => {
      console.log('Backend validating email:', email); // Debug
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.log('Backend: Email format invalid');
        return 'Please enter a valid email address';
      }

      const dummyDomains = ['example.com', 'test.com', 'fake.com', 'dummy.com', 'mailinator.com'];
      const domain = email.split('@')[1].toLowerCase();
      if (dummyDomains.includes(domain)) {
        console.log('Backend: Dummy domain detected:', domain); // Debug
        return 'Please use a real email address (not a dummy domain)';
      }

      console.log('Backend: Email validated successfully');
      return null;
    };

    // Validate email
    const emailError = validateEmail(email);
    if (emailError) {
      console.log('Backend validation failed:', emailError); // Debug
      return res.status(400).json({ message: emailError });
    }

    console.log('Received contact data:', { name, email, message });
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log('Contact saved to MongoDB');

    // Send email notification to admin
    const adminSubject = 'New Contact Form Submission';
    const adminText = `New Contact Form Submission\nName: ${name}\nEmail: ${email}\nMessage: ${message}\nReceived on: ${new Date().toLocaleString()}`;
    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin: 20px 0; background-color: #f9f9f9; border: 1px solid #ddd;">
        <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Message:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${message}</td></tr>
        <tr><td style="padding: 10px;"><strong>Received on:</strong></td><td style="padding: 10px;">${new Date().toLocaleString()}</td></tr>
      </table>
      <p style="color: #555;">This is an automated message. Please do not reply.</p>
    `;
    await sendEmail(process.env.ADMIN_EMAIL, adminSubject, adminText, adminHtml);
    console.log('Admin email sent');

    // Send confirmation email to user
    const userSubject = 'Thank You for Reaching Out!';
    const userText = `Thank You, ${name}!\n\nWe have received your message:\n${message}\n\nWe will get back to you soon.\nBest regards,\n[Your Name] Team`;
    const userHtml = `
      <h2 style="color: #2c3e50;">Thank You, ${name}!</h2>
      <p style="color: #7f8c8d; font-size: 16px;">We are grateful for your message. Here’s what you sent us:</p>
      <div style="background-color: #ecf0f1; padding: 15px; border-left: 4px solid #3498db; margin: 10px 0;">
        <p style="color: #2c3e50; margin: 0;">${message}</p>
      </div>
      <p style="color: #7f8c8d; font-size: 16px;">Our team will review it and get back to you shortly. Feel free to reach out if you have any urgent queries.</p>
      <p style="color: #3498db; font-weight: bold;">Best regards,<br>The [Your Name] Team</p>
    `;
    await sendEmail(email, userSubject, userText, userHtml);
    console.log('User email sent');

    res.status(201).json({ message: 'Message sent successfully', data: newContact });
  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(400).json({ message: 'Error sending message', error: error.message });
  }
};

// Get all contact messages (optional, for admin use)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
};