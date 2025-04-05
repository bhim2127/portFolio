import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
           Is Bhim
        </motion.h1>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Circular Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:flex items-center relative"
        >
          <div className="flex space-x-4">
            <motion.div
              whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center"
            >
              <Link to="/" className="text-gray-300 hover:text-blue-400 text-sm font-medium">
                Home
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center"
            >
              <Link to="/about" className="text-gray-300 hover:text-blue-400 text-sm font-medium">
                About
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center"
            >
              <Link to="/projects" className="text-gray-300 hover:text-blue-400 text-sm font-medium">
                Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center"
            >
              <Link to="/contact" className="text-gray-300 hover:text-blue-400 text-sm font-medium">
                Contact
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Radial Menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 flex items-center justify-center z-50 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="absolute top-4 right-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaTimes size={24} />
          </button>
        </div>
        <motion.div className="relative w-64 h-64">
          {/* Home Link */}
          <motion.div
            variants={linkVariants}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-black flex items-center justify-center"
            whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
          >
            <Link
              to="/"
              className="text-gray-300 hover:text-blue-400 text-sm font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </motion.div>
          {/* About Link */}
          <motion.div
            variants={linkVariants}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-16 h-16 rounded-full bg-black flex items-center justify-center"
            whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
          >
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-400 text-sm font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
          </motion.div>
          {/* Projects Link */}
          <motion.div
            variants={linkVariants}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-black flex items-center justify-center"
            whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
          >
            <Link
              to="/projects"
              className="text-gray-300 hover:text-blue-400 text-sm font-medium"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </motion.div>
          {/* Contact Link */}
          <motion.div
            variants={linkVariants}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-16 rounded-full bg-black flex items-center justify-center"
            whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
          >
            <Link
              to="/contact"
              className="text-gray-300 hover:text-blue-400 text-sm font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
}

export default Navbar;