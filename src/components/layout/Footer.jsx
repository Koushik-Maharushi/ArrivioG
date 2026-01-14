import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Reduced padding (pt-16 pb-8) and subtler curve (rounded-t-[30px])
    <footer className="bg-forestGreen text-white pt-16 pb-8 rounded-t-[30px] mt-[-30px] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content - Tightened Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 border-b border-white/10 pb-10">
          
          {/* Brand Column - Takes up 4 columns */}
          <div className="md:col-span-4">
            <Link to="/" className="text-2xl font-heading font-bold tracking-tight mb-4 block text-white">
              ARRIVIO
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-body max-w-xs">
              Flexible, furnished co-living spaces designed for the modern generation. Move in, meet people, and feel at home.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-warmSand hover:text-forestGreen transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-warmSand hover:text-forestGreen transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-warmSand hover:text-forestGreen transition-all">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Link Columns - Evenly distributed */}
          <div className="md:col-span-2">
            <h4 className="font-heading font-bold text-base mb-4 text-warmSand">Explore</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><Link to="/search" className="text-white/70 hover:text-white transition-colors">Find a Home</Link></li>
              <li><a href="#living-spaces" className="text-white/70 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#community" className="text-white/70 hover:text-white transition-colors">Community</a></li>
              <li><a href="#stories" className="text-white/70 hover:text-white transition-colors">Stories</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading font-bold text-base mb-4 text-warmSand">Company</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press</a></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-base mb-4 text-warmSand">Get in Touch</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-warmSand" />
                <span>hello@arrivio.de</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-warmSand" />
                <span>
                  Musterstraße 123<br />
                  10115 Berlin, Germany
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Compact */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-body">
          <p>&copy; {currentYear} ARRIVIO GmbH.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;