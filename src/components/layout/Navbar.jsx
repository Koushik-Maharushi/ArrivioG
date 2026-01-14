import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleAnchorClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      
      if (!isLandingPage) {
        navigate('/', { state: { targetId: href.substring(1) } });
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const landingPageLinks = [
    { href: '#vision', label: 'Vision' },
    { href: '#living-spaces', label: 'Spaces' },
    { href: '#community', label: 'Community' },
    { href: '#stories', label: 'Stories' },
    { href: '#faq', label: 'FAQ' },
  ];

  // 1. Standard Navbar (Non-Landing Pages)
  if (!isLandingPage) {
    return (
      <nav className="sticky top-0 z-50 bg-softWhite border-b border-warmSand/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-heading font-bold text-forestGreen tracking-tight">
                ARRIVIO
              </span>
            </Link>
            <div className="flex items-center gap-4">
               
               <Link to="/login">
                 <Button variant="outline" className="border-forestGreen text-forestGreen hover:bg-forestGreen hover:text-white">
                   Sign In
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // 2. Landing Page Navbar (Floating Glass Layout)
  return (
    <>
      {/* --- Mobile Header --- */}
      <nav className="flex md:hidden fixed top-0 w-full z-50 bg-softWhite/95 backdrop-blur-md border-b border-warmSand/50">
        <div className="w-full flex justify-between items-center h-16 px-4">
          <Link 
            to="/" 
            className="text-xl font-heading font-bold text-forestGreen tracking-tight"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ARRIVIO
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-charcoal p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-softWhite border-b border-warmSand/50 shadow-xl"
            >
              <div className="flex flex-col p-4 space-y-4">
                {landingPageLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-lg font-heading font-medium text-charcoal"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-warmSand/50">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="primary" className="w-full justify-center rounded-full">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Desktop Navbar --- */}
      <nav className="hidden md:flex fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 justify-between items-center pointer-events-none">
        
        {/* Left: Logo */}
        <div className="pointer-events-auto">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="block font-heading font-bold text-forestGreen text-2xl tracking-tight hover:opacity-80 transition-opacity drop-shadow-sm"
          >
            ARRIVIO
          </Link>
        </div>

        {/* Center: The Glass Pill */}
        <div className="pointer-events-auto">
          <div className="
            bg-white/40                
            backdrop-blur-xl           
            shadow-lg shadow-black/5   
            rounded-full px-8 py-3 
            flex items-center gap-8 
            transition-all duration-300 
            hover:bg-white/60          
            hover:shadow-xl hover:scale-[1.02]
          ">
            {/* Removed 'border border-white/50' from above className */}
            
            {landingPageLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="relative font-heading font-medium text-charcoal hover:text-forestGreen transition-colors duration-200 text-sm tracking-wide group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-forestGreen opacity-0 transition-all duration-200 group-hover:opacity-100"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Sign In Button */}
        <div className="pointer-events-auto">
          <Link to="/login">
            <Button 
              variant="primary" 
              className="px-6 py-2.5 !rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Sign In
            </Button>
          </Link>
        </div>

      </nav>
    </>
  );
};

export default Navbar;