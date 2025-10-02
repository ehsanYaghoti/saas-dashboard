import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      side : "",
      text: 'Revenue Over Time',
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function getRandomInt(max : number) : number {
  return Math.floor(Math.random() * max);
}

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => getRandomInt(500)),
      borderColor: '#287F71',
      backgroundColor: '#287F71',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => getRandomInt(1000)),
      borderColor: '#EB862A',
      backgroundColor: '#EB862A',
    },
  ],
};

export function ChartLine() {
  return <Line options={options} updateMode="resize" data={data} />;
}
