import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendEmail = async (to, subject, text, html) => {
  console.log('Initializing email service with config:', {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS ? '****' : 'Not Set',
  });

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('EMAIL_USER or EMAIL_PASS not set in environment variables');
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('Sending email to:', to);
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text, // Plain text fallback
      html, // HTML content
    });

    console.log('Email Sent to:', to, 'Response:', info.response);
    return info;
  } catch (error) {
    console.error('Email Error:', error.message);
    throw new Error(`Email sending failed: ${error.message}`);
  }
};