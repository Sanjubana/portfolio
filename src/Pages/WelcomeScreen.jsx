import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, User, Sparkles, Terminal } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { portfolioData } from '../data/portfolioData';

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
    }, 180);
    
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-80 transition duration-300" />
    <div className="relative p-2.5 sm:p-3 bg-black/60 backdrop-blur-md rounded-full border border-cyan-500/30">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { personal } = portfolioData;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 600);
    }, 2400);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(8px)",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />
          
          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto text-center">
              {/* Icons */}
              <motion.div 
                className="flex justify-center gap-4 sm:gap-6 mb-8"
                variants={childVariants}
              >
                {[Code2, Terminal, Sparkles, Github].map((Icon, index) => (
                  <div key={index} data-aos="fade-down" data-aos-delay={index * 150}>
                    <IconButton Icon={Icon} />
                  </div>
                ))}
              </motion.div>

              {/* Welcome Text */}
              <motion.div 
                className="text-center mb-8"
                variants={childVariants}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
                  Full-Stack Developer 
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                    Welcome To
                  </span>{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                    {personal.name}'s
                  </span>{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h1>
              </motion.div>

              {/* Tagline / Subtitle */}
              <motion.div 
                className="text-center"
                variants={childVariants}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-md" />
                  <div className="relative flex items-center gap-2 font-mono text-sm sm:text-base text-cyan-300">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>
                      <TypewriterEffect text={`@${personal.nickname} // ${personal.tagline}`} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;