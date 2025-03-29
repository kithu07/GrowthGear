import React from 'react';
import { LogOut, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
          <img
            className="h-8 w-auto dark:hidden"
            src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/chartdotjs.svg"
            alt="Analytics Logo"
          />
          <img
            className="h-8 w-auto hidden dark:block invert"
            src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/chartdotjs.svg"
            alt="Analytics Logo"
          />
          <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
            DataSense AI
          </span>
        </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <User className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;