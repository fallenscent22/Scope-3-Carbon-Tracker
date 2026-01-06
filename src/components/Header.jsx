import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-header-bg shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <h1 className="text-2xl font-bold text-primary-blue">Carbon Tracker</h1>
          </div>

          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-6">
              <li>
                <a
                  href="/#pricing"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-blue font-medium transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-blue font-medium transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-blue font-medium transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-blue font-medium transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                
                <button onClick={() => alert('Login feature coming soon!')} className="ml-4 px-6 py-2 bg-primary-blue text-white rounded-full hover:bg-blue-700 transition-colors font-medium">
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;