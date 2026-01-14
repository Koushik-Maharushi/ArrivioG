import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import heroVideo from '../../assets/heroVideo.mp4';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={heroVideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered Content Overlay */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Sub-heading */}
            <motion.p variants={itemVariants} className="text-lg font-body text-white/90 drop-shadow-lg">
              A New Beginning
            </motion.p>
            
            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white drop-shadow-lg leading-tight">
              Where Your New Life Begins
            </motion.h1>
            
            {/* Sub-headline */}
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-body text-white/95 drop-shadow-md max-w-2xl mx-auto">
              Move-in ready housing for international talent.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link to="/search">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="primary"
                    className="px-8 py-4 text-lg font-medium rounded-full shadow-xl"
                  >
                    Find a Home
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
