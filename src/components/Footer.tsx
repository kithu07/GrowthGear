import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info - Centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">DataSense AI</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs">
              Empowering decisions through intelligent data analysis
            </p>
          </div>

          {/* Quick Links - Centered always */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Social Links - Centered always */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Connect With Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Centered with top border */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © 2025 DataSense AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;