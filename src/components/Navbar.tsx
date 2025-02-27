import React, { useState, useEffect } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Listings', path: '/listings' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Set current path on mount and when it changes
    setCurrentPath(window.location.pathname);

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', () => setCurrentPath(window.location.pathname));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', () => setCurrentPath(window.location.pathname));
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg py-2' : 'bg-navy bg-opacity-90 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Building2 className="h-8 w-8 text-gold mr-2" />
            <div>
              <h1 className="text-white font-poppins font-bold text-xl md:text-2xl">
                Angkasa Jaya
              </h1>
              <p className="text-gold text-xs md:text-sm font-poppins">
                Indonesia's Trusted Property Partner
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.path}
                className={`nav-link ${currentPath === link.path ? 'active' : ''}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/6287877579708?text=Hello%20Angkasa%20Jaya%20Propertindo,%20I'm%20interested%20in%20getting%20a%20quote%20for%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Get a Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`nav-link block py-2 ${currentPath === link.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/6287877579708?text=Hello%20Angkasa%20Jaya%20Propertindo,%20I'm%20interested%20in%20getting%20a%20quote%20for%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;