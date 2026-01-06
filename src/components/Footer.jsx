import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-blue font-bold text-xl">C</span>
              </div>
              <h2 className="text-2xl font-bold">Carbon Tracker</h2>
            </div>
            <p className="text-gray-300">
              Empowering businesses to track and reduce their Scope 3 emissions for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@carbon.com</li>
              <li>Phone: +91 8765456792</li>
              <li>Address: Sustainable Tech Park, Bangalore, India</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.twitter.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Carbon Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;