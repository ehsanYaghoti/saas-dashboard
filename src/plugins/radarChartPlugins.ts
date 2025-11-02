import { checkTheme } from "@/utils";
import { degreeToRadian } from "@/utils/charts";
import type { Chart, RadialLinearScale } from "chart.js";

export const radarTickLabels = {
  id: "radarTickLabels",
  beforeDatasetsDraw(chart: Chart<"radar">) {
    const {
      ctx,
      data,
      scales: { r },
    } = chart;

    // const r : RadialLinearScale = scales.r

    // console.log(data.datasets[0].data)
    // console.log(r as RadialLinearScale);
    const rSclae = r as RadialLinearScale;
    const xCenter = rSclae.xCenter;
    const yCenter = rSclae.yCenter;
    const drawingArea = rSclae.drawingArea as number;
    const angle = 360 / data.datasets[0]?.data?.length;

    // console.log(xCenter, yCenter, drawingArea, angle);

    data.datasets[0]?.data?.forEach((dataPoint, index: number) => {
      ctx.save();

      const degrees = angle * index - 30;
      const radians = degreeToRadian(degrees);
      const xCoor = Math.cos(radians);
      const yCoor = -drawingArea + Math.sin(radians);

      ctx.translate(xCenter, yCenter);
      ctx.rotate(radians);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const fontSizeDataPoint = 15;
      ctx.font = `bolder ${fontSizeDataPoint}px Inter`;
      if (checkTheme()) {
        ctx.fillStyle = "white";
      } else {
        ctx.fillStyle = "rgba(0,0,0,0.8)";
      }
      //   ctx.fillRect(xCoor, yCoor - 10 , 10 , 10);
      ctx.fillText(`${dataPoint}`, xCoor, yCoor - 10);

      ctx.restore();
    });
  },
};
