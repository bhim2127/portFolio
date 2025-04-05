import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log('Particles loaded:', container);
  };

  const scrollToProjects = () => {
    // Navigate to Projects page with a query parameter to trigger scroll
    navigate('/projects?scroll=true');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center px-4 relative z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-0"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Hi, This Is Bhim
        </h1>
        <motion.div
          className="text-xl sm:text-2xl md:text-3xl text-blue-400 mt-4 inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          {['Full Stack Developer', 'MERN Enthusiast', 'Problem Solver'].map((role, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 2, duration: 1 }}
              className="block"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>
        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-md mx-auto">
          I build modern, scalable web applications with a focus on performance and user experience.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow"
          >
            Download Resume
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow"
          >
            View Projects
          </motion.button>
        </div>
        <div className="mt-6 flex gap-4 justify-center">
          <a href="https://github.com/bhim027" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400 hover:text-blue-400 text-2xl transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/bhima-ram-805642255/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-400 hover:text-blue-400 text-2xl transition-colors" />
          </a>
          <a href="https://x.com/Officialbhim1?t=eH3v2sb-0c1hgygGsKIK9w&s=09" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-400 hover:text-blue-400 text-2xl transition-colors" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;