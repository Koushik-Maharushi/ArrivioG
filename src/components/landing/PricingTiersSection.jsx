import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../common/Button';
import room850 from '../../assets/room850.png';
import room950 from '../../assets/room950.png';
import room1200 from '../../assets/room1200.png';

const PricingTiersSection = () => {
  const pricingTiers = [
    {
      id: 1,
      price: 850,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      image: room850,
    },
    {
      id: 2,
      price: 950,
      features: ['All the Plan #1 features', 'Feature 4', 'Feature 5'],
      image: room950,
    },
    {
      id: 3,
      price: 1200,
      features: ['All the Plan #2 features', 'Feature 6', 'Feature 7'],
      image: room1200,
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
    <section id="living-spaces" className="bg-softWhite py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-warmSand/50 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Top */}
              <div className="h-64 bg-warmSand overflow-hidden rounded-t-xl">
                <img 
                  src={tier.image} 
                  alt={`Plan ${tier.id} - €${tier.price}/month`} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Price Middle */}
              <div className="p-6 text-center border-b border-warmSand/50">
                <div className="mb-2">
                  <span className="text-4xl font-heading font-bold text-forestGreen">
                    €{tier.price}
                  </span>
                  <span className="text-charcoal/70 font-body ml-1">/ month</span>
                </div>
              </div>

              {/* Features List Bottom */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-forestGreen flex-shrink-0 mt-0.5" size={18} />
                      <span className="font-body text-charcoal text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View More Button */}
                <Link to={`/property/${tier.id}`} className="block">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-2 border-warmSand text-charcoal hover:bg-warmSand hover:border-warmSand"
                    >
                      View more
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTiersSection;
