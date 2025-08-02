
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
    responsive: true,
    tension:0.3,
  plugins: {
    legend: {
      position: 'top',
        },
        scales: {
  x: {
    grid: {
      display: false,        // Hide grid lines
      drawBorder: false,     // Hide axis line
      drawOnChartArea: false // Prevent drawing inside chart area
    },
    ticks: {
      display: true,         // Show labels (e.g., Jan, Feb...)
    },
  },
  y: {
    grid: {
      display: false,        // Hide grid lines
      drawBorder: false,     // Hide axis line
      drawOnChartArea: false // Prevent drawing inside chart area
    },
    ticks: {
      display: true,         // Show labels (e.g., revenue amounts)
    },
  },
}
,
    title: {
      display: false,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Sales',
      data: [12500, -13800, 17200, 16000, 19000, 21000, 18500, 19500, 17000, 20000, 23000, 24500],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Graph() {
  return <Line options={options} data={data} />;
}
