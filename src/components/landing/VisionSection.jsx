import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, Languages, DollarSign, FileCheck } from 'lucide-react';

const VisionSection = () => {
  const features = [
    {
      icon: XCircle,
      title: 'No SCHUFA',
      description: 'No SCHUFA (Credit Score)',
    },
    {
      icon: Languages,
      title: 'Multilingual support',
      description: 'Multilingual support',
    },
    {
      icon: DollarSign,
      title: 'Affordable All in pricing',
      description: 'Affordable All in pricing',
    },
    {
      icon: FileCheck,
      title: 'Simple application',
      description: 'Simple application',
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
    <section id="vision" className="bg-softWhite py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Divider with "The Vision" */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 border-t border-warmSand"></div>
          <span className="px-6 text-charcoal font-body text-sm">The Vision</span>
          <div className="flex-1 border-t border-warmSand"></div>
        </div>

        {/* Main Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6 leading-tight">
            We Believe Finding Home Should Feel Like Home
          </h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto font-body">
            Discover thoughtfully designed community living for immigrants in Germany. No SCHUFA, No complexity. Just home.
          </p>
        </motion.div>

        {/* 4-Column Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                  <IconComponent className="text-charcoal" size={40} />
                </div>
                <h3 className="font-body font-medium text-charcoal text-sm mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-charcoal/70 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
