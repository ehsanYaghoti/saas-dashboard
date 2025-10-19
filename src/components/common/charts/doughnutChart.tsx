import { doughnutChartData } from "@/constants/data/doughnutChartData";
import { doughnutChartOptions } from "@/constants/options/doughnutChartOptions";
import { dashedFullArc, lineLabelsPlugin } from "@/plugins/doughnutChartPlugins";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);




export function DoughnutChart() {
  return <div className=" flex flex-col items-start w-full  " >
    <h3 className="flex text-lg font-extrabold text-shadow-black  text-slate-700 mb-2" >Sales by e-commerce platform</h3>
    <Doughnut data={doughnutChartData} options={doughnutChartOptions} plugins={[lineLabelsPlugin , dashedFullArc]}  className=" overflow-visible"  />
  </div>
}
