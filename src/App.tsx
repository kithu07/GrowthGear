import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Brain, LineChart, History, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import DataVisualizer from './components/DataVisualizer';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import { RootState } from './store/store';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

const DashboardContent = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const features = [
    { icon: Brain, title: 'AI-Powered Analysis', description: 'Natural language processing for intuitive data querying' },
    { icon: LineChart, title: 'Visual Insights', description: 'Beautiful charts and graphs for clear data visualization' },
    { icon: History, title: 'Query History', description: 'Track and revisit your previous analyses' },
    { icon: Sparkles, title: 'Smart Suggestions', description: 'AI-driven query suggestions for better insights' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <ProgressBar />
      <Navbar />
      <ThemeToggle />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Brain className="w-16 h-16 text-blue-500 mr-3" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500">
              AI Analytics Dashboard
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Harness the power of AI to analyze your data with natural language queries
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
            >
              <feature.icon className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Query Input and Visualization */}
          <div className="lg:col-span-2 space-y-8">
            <QueryInput />
            <DataVisualizer />
          </div>
          
          {/* Query History */}
          <div className="lg:col-span-1">
            <QueryHistory />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <DashboardContent />
    </Provider>
  );
}

export default App;