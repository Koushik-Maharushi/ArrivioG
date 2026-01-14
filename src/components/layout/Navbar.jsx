import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === '/';
  
  const [isOpen, setIsOpen] = useState(false);
  
  // New State for Scroll Visibility
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // 1. Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // 2. Handle Scroll (Hide on Down, Show on Up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show if at the very top (or if menu is open)
      if (currentScrollY < 50 || isOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Check direction
      if (currentScrollY > lastScrollY.current) {
        // Scrolling DOWN -> Hide
        setIsVisible(false);
      } else {
        // Scrolling UP -> Show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]); // Re-run if menu state changes to ensure we don't hide open menu

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      
      if (!isLandingPage) {
        navigate('/', { state: { targetId: href.substring(1) } });
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        const offset = 120; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const links = [
    { href: '#vision', label: 'Vision' },
    { href: '#living-spaces', label: 'Spaces' },
    { href: '#community', label: 'Community' },
    { href: '#stories', label: 'Stories' },
    { href: '#faq', label: 'FAQ' },
  ];

  // 1. Standard Navbar (Non-Landing Pages)
  if (!isLandingPage) {
    return (
      <nav 
        className={`sticky top-0 z-50 bg-softWhite border-b border-warmSand/50 shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
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

  // 2. Landing Page Navbar (Dynamic Island + Desktop Pill)
  return (
    <>
      {/* --- Mobile: The "Dynamic Island" --- */}
      <div 
        className={`lg:hidden fixed left-0 right-0 z-50 flex justify-center px-2 pointer-events-none transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-4' : '-translate-y-32'}`}
      >
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-charcoal/10 backdrop-blur-[1px] pointer-events-auto"
              style={{ top: -16 }} // Offset the translate-y-4 so backdrop covers full screen
            />
          )}
        </AnimatePresence>

        <motion.div
          layout
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className={`
            pointer-events-auto
            bg-white/60 backdrop-blur-xl 
            border border-white/40 
            shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            overflow-hidden
            ${isOpen 
              ? 'rounded-[32px] w-full max-w-md' 
              : 'rounded-full w-full max-w-[95%]' 
            }
          `}
        >
          {/* Header Part */}
          <motion.div layout className="flex items-center justify-between px-6 py-4">
            <Link 
              to="/" 
              onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xl font-heading font-bold text-forestGreen tracking-tight drop-shadow-sm"
            >
              ARRIVIO
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/40 hover:bg-white/60 transition-colors shadow-sm"
            >
              <AnimatePresence mode="popLayout">
                {isOpen ? (
                  <motion.div 
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-forestGreen" />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-forestGreen" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>

          {/* Links Part */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 pb-4"
              >
                <div className="flex flex-col gap-1 pt-2 border-t border-white/20">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/40 active:scale-[0.98] transition-all"
                    >
                      <span className="text-lg font-heading font-medium text-charcoal">{link.label}</span>
                      <ArrowUpRight size={18} className="text-charcoal/30 group-hover:text-forestGreen transition-colors" />
                    </motion.a>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4"
                  >
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <button className="w-full bg-forestGreen text-white font-bold py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:bg-forestGreen/90">
                        <LogIn size={18} />
                        Sign In
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- Desktop Navbar (Smart Scroll) --- */}
      <nav 
        className={`hidden lg:flex fixed left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 justify-between items-center pointer-events-none transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-6' : '-translate-y-32'}`}
      >
        <div className="pointer-events-auto">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block font-heading font-bold text-forestGreen text-2xl tracking-tight hover:opacity-80 transition-opacity drop-shadow-sm">
            ARRIVIO
          </Link>
        </div>
        <div className="pointer-events-auto">
          <div className="bg-white/40 backdrop-blur-xl shadow-lg shadow-black/5 rounded-full px-8 py-3 flex items-center gap-8 transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:scale-[1.02]">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)} className="relative font-heading font-medium text-charcoal hover:text-forestGreen transition-colors duration-200 text-sm tracking-wide group">
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-forestGreen opacity-0 transition-all duration-200 group-hover:opacity-100"></span>
              </a>
            ))}
          </div>
        </div>
        <div className="pointer-events-auto">
          <Link to="/login">
            <Button variant="primary" className="px-6 py-2.5 !rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">Sign In</Button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;