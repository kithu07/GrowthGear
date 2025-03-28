import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">DataSense AI</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Empowering decisions through intelligent data analysis
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">API Reference</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © 2024 DataSense AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;