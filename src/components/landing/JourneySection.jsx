import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileCheck, Home, Heart } from 'lucide-react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import journeyImg1 from '../../assets/journeyImg1.jpeg';
import journeyImg2 from '../../assets/journeyImg2.png';

const JourneySection = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Explore',
      description: "Browse our curated collection of community spaces across Germany's most vibrant cities.",
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Apply',
      description: 'Complete a simple 10-minute application. No credit checks, no complicated paperwork.',
    },
    {
      number: '03',
      icon: Home,
      title: 'Move In',
      description: 'Receive your keys and step into your fully furnished, ready-to-live space.',
    },
    {
      number: '04',
      icon: Heart,
      title: 'Thrive',
      description: 'Join community events, build connections, and start your new chapter with ease.',
    },
  ];

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
    <section id="community" className="bg-softWhite py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column: Journey Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-12">
              Your Journey to Belonging
            </h2>
            
            <div className="space-y-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-heading font-bold text-mutedGold block mb-2">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 flex items-center justify-center bg-warmSand/50 rounded-lg">
                        <IconComponent className="text-forestGreen" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-charcoal text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-charcoal/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Link to="/search">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="primary">
                    Discover More
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Image Collage */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="space-y-3 sm:space-y-4 md:space-y-5 max-w-md lg:max-w-full"
          >
            {/* Top Image */}
            <motion.div
              whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.3 } }}
              className="bg-warmSand rounded-xl sm:rounded-2xl overflow-hidden aspect-[5/3] border-2 border-warmSand shadow-sm hover:shadow-md transition-shadow duration-300 relative w-full"
            >
              <img 
                src={journeyImg1} 
                alt="Interior space" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            
            {/* Bottom Image */}
            <motion.div
              whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.3 } }}
              className="bg-warmSand rounded-xl sm:rounded-2xl overflow-hidden aspect-[5/3] border-2 border-warmSand shadow-sm hover:shadow-md transition-shadow duration-300 relative w-full"
            >
              <img 
                src={journeyImg2} 
                alt="Interior space" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
