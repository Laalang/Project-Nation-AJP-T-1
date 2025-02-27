import React from 'react';
import { Building2, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-gold mr-2" />
              <div>
                <h3 className="text-xl font-bold font-poppins">Angkasa Jaya</h3>
                <p className="text-gold text-sm font-poppins">Propertindo</p>
              </div>
            </div>
            <p className="text-gray-300 font-opensans">
              Indonesia's trusted property partner, providing exceptional real estate services since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/listings" className="footer-link">Property Listings</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/property-sales" className="footer-link">Property Sales</a></li>
              <li><a href="/services/rentals" className="footer-link">Property Rentals</a></li>
              <li><a href="/services/property-management" className="footer-link">Property Management</a></li>
              <li><a href="/services/investment-consulting" className="footer-link">Investment Advisory</a></li>
              <li><a href="/services/legal-support" className="footer-link">Legal Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-2 mt-0.5" />
                <span>Jl. Sudirman No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-2" />
                <a href="tel:+6221555566666" className="hover:text-gold transition-colors">+62 21 5555 6666</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-2" />
                <a href="mailto:info@angkasajaya.id" className="hover:text-gold transition-colors">info@angkasajaya.id</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Angkasa Jaya Propertindo. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-gold">Privacy Policy</a>
            <a href="/terms" className="hover:text-gold">Terms of Service</a>
            <a href="/sitemap" className="hover:text-gold">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;