import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import PropertyMap from '../common/PropertyMap';

const LocationsSection = () => {
  const [selectedLocation, setSelectedLocation] = useState('Dusseldorf');
  
  const locations = ['Dusseldorf', 'Aachen', 'Bonn', 'Cologne', 'Berlin', 'Munich', 'Frankfurt'];
  
  // City coordinates mapping
  const cityCoordinates = {
    'Dusseldorf': [51.2277, 6.7735],
    'Aachen': [50.7753, 6.0839],
    'Bonn': [50.7374, 7.0982],
    'Cologne': [50.9375, 6.9603],
    'Berlin': [52.52, 13.405],
    'Munich': [48.1351, 11.582],
    'Frankfurt': [50.1109, 8.6821],
  };

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
    <section className="bg-softWhite py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-8">
            Currently available in
          </h2>
        </motion.div>

        {/* Location Pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {locations.map((location) => (
            <motion.button
              key={location}
              onClick={() => setSelectedLocation(location)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-6 py-3 rounded-full font-body font-medium transition-all duration-200
                ${
                  selectedLocation === location
                    ? 'bg-forestGreen text-white'
                    : 'bg-warmSand text-charcoal hover:bg-warmSand/80'
                }
              `}
            >
              {location}
            </motion.button>
          ))}
        </motion.div>

        {/* Map */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-16"
        >
          <PropertyMap
            center={cityCoordinates[selectedLocation] || [51.1657, 10.4515]}
            zoom={selectedLocation ? 10 : 6}
            showCenterMarker={true}
            centerMarkerTitle={selectedLocation}
            listings={[
              {
                title: 'Cozy Studio in Berlin',
                price: 850,
                lat: 52.52,
                lng: 13.405,
              },
              {
                title: 'Shared Room in Munich',
                price: 950,
                lat: 48.1351,
                lng: 11.582,
              },
              {
                title: 'Loft in Hamburg',
                price: 1200,
                lat: 53.5511,
                lng: 9.9937,
              },
              {
                title: 'Apartment in Frankfurt',
                price: 1050,
                lat: 50.1109,
                lng: 8.6821,
              },
            ]}
          />
        </motion.div>

        {/* Connect with us CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-4">
            Connect with us
          </h3>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto font-body">
            Schedule a quick call to learn how AARIVIO can turn your relocation into a smooth transition.
          </p>
          <Link to="/search">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" className="inline-flex items-center gap-2">
                Learn More
                <span>→</span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
