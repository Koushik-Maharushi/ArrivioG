import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

const Navbar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false); // Close mobile menu on link click
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Navigation links for landing page
  const landingPageLinks = [
    { href: '#vision', label: 'The Vision' },
    { href: '#living-spaces', label: 'Living Spaces' },
    { href: '#community', label: 'Community' },
    { href: '#who-we-serve', label: 'Who We Serve' },
  ];

  // If not on landing page, show regular navbar
  if (!isLandingPage) {
    return (
      <nav className="sticky top-0 z-50 bg-softWhite border-b border-warmSand/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-heading font-bold text-forestGreen">
                ARRIVIO
              </span>
            </Link>
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  // Landing page navbar with two distinct layouts
  return (
    <>
      {/* Mobile Navbar - Full-width rectangular at top-0 */}
      <nav className="flex md:hidden fixed top-0 w-full z-50 bg-softWhite/95 backdrop-blur-sm border-b border-warmSand/50 shadow-sm">
        <div className="w-full flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-xl font-heading font-bold text-forestGreen">
              ARRIVIO
            </span>
          </Link>

          {/* Hamburger Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-charcoal hover:text-forestGreen transition-colors duration-200 p-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu - Full width, slides down */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden bg-softWhite w-full border-t border-warmSand/50"
            >
              <div className="flex flex-col">
                {landingPageLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className="font-heading font-medium text-charcoal hover:text-forestGreen hover:bg-warmSand/30 transition-colors duration-200 text-base py-4 px-4 border-b border-warmSand/50"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: landingPageLinks.length * 0.05, duration: 0.2 }}
                  className="p-4 border-t border-warmSand/50"
                >
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="primary" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Desktop Navbar - Floating Pill at top-6 */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
        <div className="bg-warmSand/70 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-warmSand/50 flex items-center gap-6">
          {landingPageLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="font-heading font-medium text-charcoal hover:text-forestGreen transition-colors duration-200 text-sm whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <Link 
            to="/login"
            className="ml-4 bg-forestGreen text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-forestGreen/90 hover:scale-105 transition-all duration-200 shadow-md"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
