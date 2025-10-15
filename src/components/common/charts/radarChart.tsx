import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Title
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Title
);

import { radarChartOptions } from '@/constants/options/radarChartOptions';
import { radarChartData } from '@/constants/data/radarChartData';
import { radarTickLabels } from '@/plugins/radarChartPlugins';


export default function RadarChart(){
    return (
        <Radar data={radarChartData} updateMode='resize' options={radarChartOptions} plugins={[radarTickLabels]} className='' />
    )
}
