import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

function About() {
  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8 z-0">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left"
      >
        About Me
      </motion.h2>
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="md:w-1/2 bg-gray-800/50 backdrop-blur-md p-6 rounded-lg"
        >
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          I am a passionate developer working on the MERN stack. I love coding and problem-solving, and I am always excited to learn new technologies. I specialize in building scalable web applications with a focus on clean code and user experience.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow"
          >
            Download CV
          </motion.button>
        </motion.div>
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="md:w-1/2"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white">Skills</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-2">
              <FaReact className="text-blue-400 text-2xl" />
              <p className="text-gray-300">React</p>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '90%' }}
                transition={{ delay: 0.6, duration: 1 }}
                className="bg-blue-500 h-2 rounded-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <FaNodeJs className="text-green-400 text-2xl" />
              <p className="text-gray-300">Node.js</p>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ delay: 0.7, duration: 1 }}
                className="bg-green-500 h-2 rounded-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <FaDatabase className="text-yellow-400 text-2xl" />
              <p className="text-gray-300">MongoDB</p>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ delay: 0.8, duration: 1 }}
                className="bg-yellow-500 h-2 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;