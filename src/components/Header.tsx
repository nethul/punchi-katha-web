import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-sm z-50 shadow-sm rounded-b-3xl mx-4">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold text-orange-700">
            Punchi Katha
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-slate-600 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#how-it-works" className="text-slate-700 hover:text-slate-600 transition-colors duration-300 font-medium">
              How It Works
            </a>
            <a href="#book-examples" className="text-slate-700 hover:text-slate-600 transition-colors duration-300 font-medium">
              Book Examples
            </a>
            <a href="#contact" className="text-slate-700 hover:text-slate-600 transition-colors duration-300 font-medium">
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-slate-700 hover:text-slate-600 transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#how-it-works" className="text-slate-700 hover:text-slate-600 transition-colors duration-300 font-medium">
                How It Works
              </a>
              <a href="#book-examples" className="text-slate-700 hover:text-slate-600 transition-colors duration-300 font-medium">
                Book Examples
              </a>
              <a href="#contact" className="text-slate-700 hover:text-slate-600 transition-colors duration-300 font-medium">
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;