import { gaugeChartData } from "@/constants/data/gaugeChartData";
import { gaugeChartOptions } from "@/constants/options/gaugeChartOptions";
import { dashedArc, textsMiddle } from "@/plugins/gaugeChartPlugins";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title , SubTitle } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title , SubTitle);




export function GaugeChart() {
  return <div className=" flex flex-col items-center w-full  " >
    <Doughnut data={gaugeChartData} options={gaugeChartOptions} plugins={[textsMiddle , dashedArc]}  />
    <div className=" flex items-center w-full px-6 divide-x-2 divide-[#E5E9EF] " >
        <div
            className=" flex flex-col items-start gap-1 relative w-1/2
             before:content-[''] before:h-12 before:absolute before:left-[-15px] before:top-[5px] before:w-[4px] before:rounded-full before:bg-primary-1
        " >
            <span className=" text-xl font-bold text-slate-800" >1,809</span>
            <p className=" text-base font-bold text-slate-400" >Premium Plan</p>
        </div>
        <div
            className=" flex flex-col items-end justify-end gap-1 relative w-1/2
             after:content-[''] after:h-12 after:absolute after:right-[-15px] after:top-[5px] after:w-[4px] after:rounded-full after:bg-[#E3E8EF]
        " >
            <span className=" text-xl font-bold text-slate-800" >515</span>
            <p className=" text-base font-bold text-slate-400" >Basic Plan</p>
        </div>
    </div>
  </div>
}
