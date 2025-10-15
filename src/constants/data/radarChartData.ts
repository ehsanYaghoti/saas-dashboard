import type { RadarProps } from "@/types/chart";
import { primaryColor, secondaryColor } from "../charts";


export const radarChartData : RadarProps['data'] = {
  labels: ['Europe', 'Americas', 'Africa', 'Middel East', 'Pacific', 'Asia'],
  datasets: [
    {
      label: 'Sales',
      data: [2728 , 2409 , 3028 , 800 , 1838, 2843],
      fill : true,
      backgroundColor : secondaryColor,
      pointRadius : 4,
      pointBackgroundColor : primaryColor,
      pointBorderWidth : 2,
      pointBorderColor : "#fff"

    },
  ],
};
