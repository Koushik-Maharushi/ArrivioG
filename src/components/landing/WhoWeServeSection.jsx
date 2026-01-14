import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhoWeServeSection = () => {
  const personas = [
    {
      title: 'Skilled Professionals',
      description: 'Perfect for professionals relocating to Germany for work opportunities.',
      features: ['Prime locations', 'Near business districts', 'Fully furnished'],
    },
    {
      title: 'Students',
      description: 'Ideal living spaces for students pursuing education in Germany.',
      features: ['Near universities', 'Student-friendly pricing', 'Study spaces'],
    },
    {
      title: 'Azubis',
      description: 'Comfortable housing for apprentices starting their careers.',
      features: ['Close to training', 'Affordable options', 'Community support'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="who-we-serve" className="bg-softWhite py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeOut' },
            },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">
            WHO WE SERVE?
          </h2>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg p-8 shadow-sm border border-warmSand/50 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-heading font-bold text-charcoal text-xl mb-4">
                {persona.title}
              </h3>
              
              <div className="border-t border-warmSand mb-4"></div>
              
              <p className="font-body text-charcoal/70 mb-6 leading-relaxed">
                {persona.description}
              </p>

              <ul className="space-y-3">
                {persona.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle className="text-forestGreen flex-shrink-0 mt-0.5" size={18} />
                    <span className="font-body text-charcoal text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
