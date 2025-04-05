import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 p-4 text-center z-0">
      <p>© {new Date().getFullYear()} [Bhim]. All Rights Reserved.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://github.com/bhim027" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/bhima-ram-805642255/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          LinkedIn
        </a>
      </div>
      <button
        onClick={scrollToTop}
        className="mt-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;