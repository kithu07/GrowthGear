import React from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DataVisualizer: React.FC = () => {
  const { results, loading, error } = useSelector((state: RootState) => state.query);
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  if (!results.length) {
    return null;
  }

  const lineData = {
    labels: results.map(r => r.month),
    datasets: [
      {
        label: 'Trend Analysis',
        data: results.map(r => r.value),
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        data: [30, 25, 20, 25],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(251, 146, 60, 0.8)',
          'rgba(52, 211, 153, 0.8)',
          'rgba(167, 139, 250, 0.8)',
        ],
      },
    ],
  };

  const barData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: isDarkMode ? '#fff' : '#000',
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDarkMode ? '#fff' : '#000',
        },
      },
      x: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDarkMode ? '#fff' : '#000',
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Trend Analysis</h3>
        <div className="h-64">
          <Line data={lineData} options={chartOptions} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Product Distribution</h3>
          <div className="h-64">
            <Pie data={pieData} />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Quarterly Revenue</h3>
          <div className="h-64">
            <Bar data={barData} options={chartOptions} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DataVisualizer;