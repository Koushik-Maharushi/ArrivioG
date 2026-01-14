import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroVideo from '../../assets/heroVideo.mp4';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // The cities mentioned in your LocationsSection
  const cities = [
    'Dusseldorf', 
    'Aachen', 
    'Bonn', 
    'Cologne', 
    'Berlin', 
    'Munich', 
    'Frankfurt'
  ];

  const handleCitySelect = (city) => {
    navigate('/search', { state: { location: city } });
    setIsDropdownOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center">
      
      {/* 1. Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. Centered Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        <div className="max-w-4xl mx-auto pointer-events-auto"> 
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg font-body text-white/90 drop-shadow-lg">
              A New Beginning
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white drop-shadow-lg leading-tight">
              Where Your New Life Begins
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-body text-white/95 drop-shadow-md max-w-2xl mx-auto">
              Move-in ready housing for international talent.
            </motion.p>
            
            {/* CTA Dropdown Section */}
            <motion.div variants={itemVariants} className="pt-10 relative z-50">
              <div className="relative inline-block">
                
                {/* Main Button */}
                <motion.button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative z-50 inline-flex items-center justify-center gap-3 
                    bg-forestGreen hover:bg-forestGreen/90 text-white 
                    px-10 py-4 text-lg font-heading font-semibold rounded-full 
                    shadow-xl shadow-forestGreen/20 transition-all duration-300 min-w-[240px]
                    ${isDropdownOpen ? 'ring-4 ring-white/20' : ''}
                  `}
                >
                  Find a Home
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <>
                      {/* Fixed Backdrop to handle clicks outside */}
                      <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setIsDropdownOpen(false)}
                      />
                      
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9, x: "-50%" }}
                        animate={{ opacity: 1, y: 12, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: -10, scale: 0.9, x: "-50%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        // Styles for Sleekness:
                        // 1. x-[-50%] combined with left-1/2 centers it perfectly relative to the button
                        // 2. backdrop-blur and bg-softWhite/95 give it that premium feel
                        className="absolute top-full left-1/2 z-50 w-72 origin-top 
                                   bg-softWhite/95 backdrop-blur-md 
                                   rounded-2xl shadow-2xl shadow-black/20 
                                   border border-warmSand/50 overflow-hidden"
                      >
                        {/* Header */}
                        <div className="px-4 py-3 bg-warmSand/20 border-b border-warmSand/30">
                          <span className="text-xs font-heading font-bold text-forestGreen uppercase tracking-widest">
                            Select Destination
                          </span>
                        </div>

                        {/* Scrollable list area (Hidden Scrollbar) */}
                        <div className="py-2 max-h-[280px] overflow-y-auto scrollbar-hide">
                          {cities.map((city, index) => (
                            <motion.button
                              key={city}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => handleCitySelect(city)}
                              className="group w-full block px-6 py-3 text-center transition-all duration-200 hover:bg-forestGreen/5"
                            >
                              <span className="font-heading font-medium text-charcoal text-lg group-hover:text-forestGreen group-hover:scale-105 inline-block transition-transform">
                                {city}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Hide Scrollbar Utility Style (Inline for simplicity) */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;