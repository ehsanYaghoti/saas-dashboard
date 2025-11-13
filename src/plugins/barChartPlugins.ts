import { checkTheme } from "@/utils";
import type { Chart, Plugin } from "chart.js";

export const progressBar: Plugin = {
  id: "progressBar",
  beforeDraw(chart: Chart<"bar">) {
    const {
      ctx,
      data,
      chartArea: { right, left, height, width },
      scales: { y },
    } = chart;

    ctx.save();

    const barPercentage = data?.datasets[0]?.barPercentage as number;
    const categoryPercentage = data?.datasets[0]?.categoryPercentage as number;

    const barHeight: number =
      (height / y.ticks.length) * barPercentage * categoryPercentage;

    data.datasets[0]?.data?.forEach((dataPoint, index: number) => {
      // label text
      const fontSizeLabel = 12;
      ctx.font = `bold ${fontSizeLabel}px Inter`;
      if(checkTheme()){
        ctx.fillStyle = "white";
      } else {
        ctx.fillStyle = "rgba(0,0,0,0.4)";
      }
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      if (data.labels)
        ctx.fillText(
          data?.labels[index] as string,
          left,
          y.getPixelForValue(index) - fontSizeLabel - 5
        );

      // label value
      const fontSizeDataPoint = 15;
      ctx.font = `bolder ${fontSizeLabel}px Inter`;
      if(document.documentElement.className.includes('dark')){
        ctx.fillStyle = "white";
      } else {
        ctx.fillStyle = "rgba(0,0,0,0.8)";
      }
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `${dataPoint} • 8% `,
        right,
        y.getPixelForValue(index) - fontSizeDataPoint - 5
      );

      //  bg color progress bar
      ctx.beginPath();
      ctx.fillStyle = "#F2F3F6";
      ctx.roundRect(
        left,
        y.getPixelForValue(index) - barHeight / 2,
        width,
        barHeight,
        8
      );
      ctx.fill();
    });
  },
};

const sources : string[] = [
    "https://hatscripts.github.io/circle-flags/flags/au.svg",
    "https://hatscripts.github.io/circle-flags/flags/id.svg",
    "https://hatscripts.github.io/circle-flags/flags/th.svg",
    "https://hatscripts.github.io/circle-flags/flags/de.svg",
]

const images : HTMLImageElement[] = sources.map((image) => {
  const img = new Image();
  img.src = image;
    // img = image.key;
  return img
});

export const imageLabels: Plugin = {
  id: "imageLabels",
  beforeDatasetsDraw(chart) {
    const {
      ctx,
      data,
      scales: { y },
    } = chart;

    ctx.save();

    data.datasets[0].data.forEach((_, index) => {
    //   const leftPadding : number = +chart.options.layout?.padding?.left | 30;
    //   console.log(chart.options.layout?.padding);
    //   const flag = new Image();
    //   flag.src = images[index];

      ctx.drawImage(
        images[index],
        24,
        y.getPixelForValue(index) - 25,
        30,
        30
      );
    });
  },
};
