import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    console.log('Frontend validating email:', email); // Debug
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    const dummyDomains = ['example.com', 'test.com', 'fake.com', 'dummy.com', 'mailinator.com'];
    const domain = email.split('@')[1].toLowerCase();
    if (dummyDomains.includes(domain)) {
      console.log('Frontend detected dummy domain:', domain); // Debug
      return 'Please use a real email address (not a dummy domain)';
    }

    return null; // Valid email
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const apiUrl = process.env.REACT_APP_API_URL || 'https://portfolio-1-66vd.onrender.com';
    console.log('API URL:', apiUrl);

    // Validate email
    const emailError = validateEmail(formData.email);
    if (emailError) {
      console.log('Frontend validation failed:', emailError); // Debug
      toast.error(emailError);
      setLoading(false);
      return;
    }
    console.log('Frontend validation passed for:', formData.email); // Debug

    try {
      const response = await axios.post(`${apiUrl}/api/contact`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success(response.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact submit error:', error.response ? error.response.data : error.message); // Debug
      toast.error(
        error.response?.data?.message ||
        error.message ||
        'Failed to send message. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8 z-0">
      <ToastContainer position="top-right" autoClose={3000} />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left"
      >
        Contact Me
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-8 max-w-md mx-auto bg-gray-800/50 backdrop-blur-md p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors"
          rows="4"
          required
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className={`w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Contact;
