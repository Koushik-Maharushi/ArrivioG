import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- STEP 3: IMPORT YOUR LOCAL IMAGES HERE ---
// Make sure the path matches your folder structure
import berlinImg from '../../assets/cities/berlin.jpeg';
import munichImg from '../../assets/cities/munich.jpeg';
import frankfurtImg from '../../assets/cities/frankfurt.jpeg';
import cologneImg from '../../assets/cities/cologne.jpeg';
import dusseldorfImg from '../../assets/cities/dusseldorf.jpeg';
import bonnImg from '../../assets/cities/bonn.jpeg';
import aachenImg from '../../assets/cities/aachen.jpeg';

const locations = [
  { 
    id: 1, 
    name: "Berlin", 
    top: "28%", left: "72%", 
    count: 12, 
    price: "750",
    label: "The Capital", 
    description: "Vibrant culture & tech hub.",
    image: berlinImg  // <--- Use the imported variable
  },
  { 
    id: 2, 
    name: "Munich", 
    top: "80%", left: "60%", 
    count: 8, 
    price: "950", 
    label: "Bavarian Heart", 
    description: "Business & tradition.",
    image: munichImg
  },
  { 
    id: 3, 
    name: "Frankfurt", 
    top: "55%", left: "35%", 
    count: 6, 
    price: "850", 
    label: "Finance Hub", 
    description: "Skyscrapers & connectivity.",
    image: frankfurtImg
  },
  { 
    id: 4, 
    name: "Cologne", 
    top: "48%", left: "18%", 
    count: 9, 
    price: "720", 
    label: "Media City", 
    description: "Cathedral city on the Rhine.",
    image: cologneImg
  },
  { 
    id: 5, 
    name: "Dusseldorf", 
    top: "42%", left: "15%", 
    count: 7, 
    price: "780", 
    label: "Fashion & Art", 
    description: "Luxury & lifestyle.",
    image: dusseldorfImg
  },
  { 
    id: 6, 
    name: "Bonn", 
    top: "53%", left: "16%", 
    count: 4, 
    price: "650", 
    label: "Historic", 
    description: "Former capital charm.",
    image: bonnImg
  },
  { 
    id: 7, 
    name: "Aachen", 
    top: "49%", left: "5%", 
    count: 3, 
    price: "580", 
    label: "Tech & Uni", 
    description: "Innovation meets history.",
    image: aachenImg
  }
];

const LocationsSection = () => {
  const [activeCityId, setActiveCityId] = useState(1);
  const activeLocation = locations.find(l => l.id === activeCityId);

  return (
    <section className="py-24 bg-softWhite relative overflow-hidden" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Content & Controls */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-forestGreen mb-6">
                Explore our <br />
                <span className="text-mutedGold">prime locations</span>
              </h2>
              
              <p className="text-charcoal/70 font-body text-lg mb-8 leading-relaxed">
                Click on a city to preview the lifestyle. From the tech scene in Berlin to the fashion avenues of Dusseldorf, find the vibe that fits you.
              </p>
            </motion.div>

            {/* List of Cities */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-10">
              {locations.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setActiveCityId(city.id)}
                  className={`
                    px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between group border
                    ${activeCityId === city.id 
                      ? 'bg-forestGreen text-white border-forestGreen shadow-lg scale-105' 
                      : 'bg-white border-warmSand text-charcoal/70 hover:border-forestGreen/50 hover:text-forestGreen'
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    {activeCityId === city.id && <Sparkles size={14} className="animate-pulse text-mutedGold"/>}
                    {city.name}
                  </span>
                  <span className={`text-xs ${activeCityId === city.id ? 'text-white/80' : 'text-charcoal/40'}`}>
                    {city.count} homes
                  </span>
                </button>
              ))}
            </div>

            {/* Action Card for Active City */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCityId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white p-6 rounded-2xl border border-warmSand/50 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-forestGreen">{activeLocation.name}</h3>
                    <p className="text-charcoal/60 text-sm">{activeLocation.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-charcoal/50 uppercase tracking-wide">Starting from</p>
                    <p className="text-lg font-bold text-forestGreen">€{activeLocation.price}<span className="text-sm font-normal text-charcoal/60">/mo</span></p>
                  </div>
                </div>
                
                <Link to="/search" state={{ location: activeLocation.name }}>
                  <button className="w-full py-3 bg-warmSand/20 hover:bg-forestGreen hover:text-white text-forestGreen rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2">
                    View Homes in {activeLocation.name}
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Immersive Map Container */}
          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] w-full group perspective-1000">
            
            {/* The Main "Screen" */}
            <div className="absolute inset-0 bg-charcoal rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:rotate-y-1">
              
              {/* DYNAMIC BACKGROUND IMAGE */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCityId}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.6, scale: 1 }} 
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activeLocation.image})` }}
                />
              </AnimatePresence>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal/80 z-10" />

              {/* The Map Layer */}
              <div className="relative z-20 w-full h-full flex items-center justify-center p-6">
                
                {/* Germany SVG */}
                <div className="relative w-full h-full max-w-[360px] drop-shadow-2xl">
                  <svg viewBox="0 0 350 500" className="w-full h-full overflow-visible">
                     <path 
                      d="M140,480 L180,490 L220,485 L260,460 L280,420 L320,400 L300,340 L340,300 L320,220 L300,140 L330,80 L260,20 L180,10 L140,30 L90,50 L70,110 L30,140 L10,220 L40,280 L10,350 L40,420 L90,460 Z" 
                      className="fill-white/10 stroke-white/40 stroke-[1.5]"
                      style={{ vectorEffect: "non-scaling-stroke" }}
                    />
                    
                    {/* Connecting Lines */}
                    <svg className="overflow-visible">
                      {locations.map((loc) => (
                        <line 
                          key={loc.id}
                          x1={loc.left} 
                          y1={loc.top} 
                          x2={activeLocation.left} 
                          y2={activeLocation.top} 
                          stroke="white" 
                          strokeOpacity={activeCityId === loc.id ? 0 : 0.05} 
                          strokeWidth="1"
                        />
                      ))}
                    </svg>
                  </svg>

                  {/* Locations Dots */}
                  {locations.map((loc) => (
                    <motion.div
                      key={loc.id}
                      className="absolute cursor-pointer"
                      style={{ top: loc.top, left: loc.left }}
                      onClick={() => setActiveCityId(loc.id)}
                      whileHover={{ scale: 1.2 }}
                    >
                      {activeCityId === loc.id ? (
                        <div className="relative flex items-center justify-center">
                          <div className="absolute w-12 h-12 bg-mutedGold/20 rounded-full animate-ping"></div>
                          <div className="absolute w-6 h-6 bg-mutedGold/40 rounded-full animate-pulse"></div>
                          <MapPin size={28} className="text-mutedGold relative z-10 fill-mutedGold" />
                          
                          {/* Floating Label on Map */}
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: -40 }}
                            className="absolute bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg shadow-xl text-xs font-bold text-forestGreen whitespace-nowrap z-50 pointer-events-none"
                          >
                            {loc.name}
                          </motion.div>
                        </div>
                      ) : (
                        <div className="w-3 h-3 bg-white/60 rounded-full hover:bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* HUD Elements */}
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white/80 font-heading font-bold text-2xl tracking-wider">{activeLocation.name.toUpperCase()}</p>
                <p className="text-mutedGold text-xs font-mono uppercase tracking-widest">Available Now</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationsSection;