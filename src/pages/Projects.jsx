import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        console.log('API URL:', process.env.REACT_APP_API_URL); // Debug
        const response = await axios.get('http://localhost:8000/api/projects');
        setProjects(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Failed to fetch projects. Showing dummy data instead.');
        // Fallback to dummy data
        setProjects([
          {
            id: 1,
            title: 'Project 1',
            description: 'A web app built with MERN stack for task management.',
            liveLink: '#',
            githubLink: 'https://github.com/bhim027',
            image: '/images/project1.png',
          },
          {
            id: 2,
            title: 'Project 2',
            description: 'An e-commerce platform with payment integration.',
            liveLink: '#',
            githubLink: 'https://github.com/bhim027',
            image: '/images/project2.png',
          },
          {
            id: 3,
            title: 'Project 3',
            description: 'A portfolio website with modern design.',
            liveLink: '#',
            githubLink: 'https://github.com/bhim027',
            image: '/images/project3.png',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    // Check if we need to scroll (coming from Home page)
    const params = new URLSearchParams(location.search);
    if (params.get('scroll') === 'true') {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div id="projects" className="min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8 z-0">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left"
      >
        My Projects
      </motion.h2>

      {loading && (
        <div className="text-center mt-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-12 h-12 border-4 border-t-blue-500 border-gray-700 rounded-full mx-auto"
          />
          <p className="text-gray-400 mt-2">Loading projects...</p>
        </div>
      )}

      {error && !loading && (
        <p className="text-red-400 text-center mt-4">{error}</p>
      )}

      {!loading && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Tilt key={project._id || project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-lg"
              >
                <img
                  src={project.image || '/images/default.png'} // Fallback image
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  onError={(e) => { e.target.src = '/images/default.png'; }} // Fallback on error
                />
                <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base mt-2">{project.description}</p>
                <div className="mt-4 flex gap-3">
                  <a href={project.liveLink} className="text-blue-400 hover:text-blue-300 text-sm">
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="text-blue-400 hover:text-blue-300 text-sm">
                    GitHub
                  </a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;