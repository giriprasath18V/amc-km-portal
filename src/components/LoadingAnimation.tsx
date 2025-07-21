import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Single Chilled Ice Cube Bouncing */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-blue-300 via-cyan-400 to-blue-500 rounded-lg shadow-2xl relative"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Ice cube shine effect */}
          <div className="absolute top-2 left-2 w-4 h-4 bg-white opacity-30 rounded-sm"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-cyan-200 opacity-50 rounded-sm"></div>
        </motion.div>
        
        {/* Subtle cold effect particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300 rounded-full opacity-60"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;