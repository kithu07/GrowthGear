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

const GlowLine = () => {
  return (
    <div className="fixed left-5 top-0 h-full w-1 md:w-2 z-20">
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-blue-500 to-violet-600 shadow-[0_0_20px_5px_rgba(59,130,246,0.5)]"></div>
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-blue-500/30 to-violet-600/30 shadow-[0_0_40px_10px_rgba(124,58,237,0.3)] animate-pulse"></div>
    </div>
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
    <div className="min-h-screen px-10 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-15 dark:opacity-10" />
      
      <motion.div 
        className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-blue-400 blur-[2px]"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-violet-500 blur-[2px]"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute -left-40 -bottom-40 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl"></div>
    </div>
  
    {/* Content container with higher z-index */}
    <div className="relative z-10">
    
      <ProgressBar />
      <GlowLine />
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
              whileHover={{
                y: -5,
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 5px 10px -5px rgba(59, 130, 246, 0.2)"
              }}
              className="relative p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all overflow-hidden group"
            >
              {/* Glow background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-blue-500/30 via-violet-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-orange-500/10 animate-[spin_6s_linear_infinite]"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/30">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8">
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