import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const QueryHistory: React.FC = () => {
  const history = useSelector((state: RootState) => state.query.history);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center mb-4">
        <Clock className="text-blue-500 mr-2" />
        <h2 className="text-xl dark:text-white font-semibold">Query History</h2>
      </div>
      <div className="space-y-2">
        {history.map((query, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowRight size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-600 dark:text-gray-300">{query}</span>
          </motion.div>
        ))}
        {history.length === 0 && (
          <p className="text-gray-500 text-center py-4">No queries yet</p>
        )}
      </div>
    </motion.div>
  );
};

export default QueryHistory;