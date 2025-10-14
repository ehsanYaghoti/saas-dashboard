import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { barChartdata } from "@/constants/data/barChartData";
import { barChartOptions } from "@/constants/options/barChartOptions";
import { imageLabels, progressBar } from "@/plugins/barChartPlugins";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);

export function HorizontalBarChart() {
  return <Bar options={barChartOptions} data={barChartdata} plugins={[progressBar , imageLabels]}  />;
}
