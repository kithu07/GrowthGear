import React, { useState, useEffect } from 'react';
import { Search, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setCurrentQuery, addToHistory, setLoading, setResults, setError } from '../store/querySlice';

const suggestions = [
  "Show me sales trends for the last quarter",
  "Compare revenue across regions",
  "Analyze customer satisfaction ratings",
  "Display monthly user growth"
];

const QueryInput: React.FC = () => {
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    dispatch(setLoading(true));
    dispatch(setCurrentQuery(input));
    dispatch(addToHistory(input));

    try {
      // Simulated API call with more realistic data
      const mockData = Array.from({ length: 12 }, (_, i) => ({
        month: new Date(2025, i).toLocaleString('default', { month: 'short' }),
        value: Math.floor(Math.random() * 100) + 50
      }));
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(setResults(mockData));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError('Failed to process query'));
    } finally {
      dispatch(setLoading(false));
      setInput('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.suggestions-container')) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto suggestions-container"
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Ask anything about your data..."
            className="w-full pl-12 pr-12 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-lg hover:shadow-xl"
          />
          <motion.button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send size={20} />
          </motion.button>
        </div>

        <AnimatePresence>
          {showSuggestions && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-10 border border-gray-200 dark:border-gray-700"
            >
              <div className="p-2">
                <div className="flex items-center px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span>Suggested Queries</span>
                </div>
                {suggestions.map((suggestion, index) => (
                  <motion.div
                    key={suggestion}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-3 py-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
                  >
                    {suggestion}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default QueryInput;