import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bike, Github, Code2, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Typewriter effect component
const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 120);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent font-bold drop-shadow-xl">
      {displayText}
      <span className="animate-pulse text-cyan-300">|</span>
    </span>
  );
};

// Glowing icon button (no blur)
const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-125 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-br from-indigo-600 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition duration-300" />
    <div className="relative p-3 bg-white/10 rounded-full border border-white/20 shadow-md">
      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white drop-shadow-sm" />
    </div>
  </div>
);

// Main welcome screen
const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false });

    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="welcome"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >

          <div className="relative text-center z-20 w-full max-w-5xl mx-auto space-y-8">
            {/* Glowing Icons Row */}
            <div className="flex justify-center gap-6 mb-6">
              {[Code2, User, Github].map((Icon, i) => (
                <div key={i} data-aos="zoom-in" data-aos-delay={i * 200}>
                  <IconButton Icon={Icon} />
                </div>
              ))}
            </div>

            {/* Big welcome title */}
            <motion.div
              className="text-white drop-shadow-lg"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide space-y-2">
                <div>
                  <span className="px-2">Welcome</span>
                  <span className="px-2">To</span>
                  <span className="px-2">My</span>
                </div>
                <div>
                  <span className="inline-block px-2 bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                    Personal Portfolio
                  </span>
                  <span className="inline-block px-2 bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                    Website
                  </span>
                </div>
              </h1>
            </motion.div>

            {/* Tagline with typewriter effect */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="relative group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:scale-105 transition-transform duration-300">
                <Bike className="w-6 h-6 text-cyan-300" />
                <TypewriterEffect text="Build - Break - Fix - Repeat" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
