import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-blue-800 to-purple-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-orange-400 mb-4">
              Punchi Katha
            </div>
            <p className="text-blue-100 text-lg mb-4">
              Creating magical, personalized storybooks where every child becomes the hero of their own adventure.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="w-5 h-5 text-blue-300" />
              <span className="text-blue-100">hello@punchikatha.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-blue-300" />
              <span className="text-blue-100">+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-blue-100 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#book-examples" className="text-blue-100 hover:text-white transition-colors">Book Examples</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-sky-500 hover:bg-sky-400 rounded-full flex items-center justify-center transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <p className="text-blue-200">
            © 2024 Punchi Katha. All rights reserved. Made with ❤️ for children everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;