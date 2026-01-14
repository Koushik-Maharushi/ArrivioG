import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import communityImg from '../../assets/communityImg.png';

const CommunityBanner = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={communityImg} 
          alt="Vibrant Community" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Overlay Text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="absolute inset-0 flex items-start justify-start p-8 sm:p-12 lg:p-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-lg">
          Vibrant Community
        </h2>
      </motion.div>
    </section>
  );
};

export default CommunityBanner;
