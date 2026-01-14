import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-warmSand/30 border-t border-warmSand/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-forestGreen mb-4">
              ARRIVIO
            </h3>
            <p className="text-charcoal/80 max-w-md">
              Move-in ready housing for international talent relocating to Germany. 
              Verified listings, end-to-end management, zero paperwork.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-earthBrown mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/search" className="text-charcoal/80 hover:text-forestGreen transition-colors">
                  Find a Home
                </Link>
              </li>
              <li>
                <Link to="/employers" className="text-charcoal/80 hover:text-forestGreen transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-charcoal/80 hover:text-forestGreen transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-earthBrown mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-charcoal/80 hover:text-forestGreen transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-charcoal/80 hover:text-forestGreen transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-charcoal/80 hover:text-forestGreen transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-warmSand/50 text-center text-charcoal/60">
          <p>&copy; {new Date().getFullYear()} ARRIVIO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
