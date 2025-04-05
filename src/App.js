import React, { useState, useEffect } from 'react';
import AppRouter from './AppRouter.js';
import { motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-50"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 border-4 border-t-blue-500 border-gray-700 rounded-full"
          />
        </motion.div>
      ) : (
        <AppRouter />
      )}
    </div>
  );
}

export default App;