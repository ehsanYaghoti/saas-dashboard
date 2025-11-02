import type { DoughnutProps } from "@/types/chart";
import img1 from "@/assets/charts/tokopedia.svg";
import img2 from "@/assets/charts/alibaba.svg";
import img3 from "@/assets/charts/amazon.svg";
import { degreeToRadian } from "@/utils/charts";
// import { img } from "./gaugeChartPlugins";
import { checkTheme } from "@/utils";

export const dashedFullArc: DoughnutProps["plugin"] = {
  id: "dashedFullArc",
  afterDatasetDraw(chart) {
    const {
      ctx,
      chartArea: { left, bottom, width, height },
    } = chart;

    // console.log((width + height) / 5);

    ctx.save();

    // dashed arc
    ctx.setLineDash([1, 1]);

    ctx.beginPath();
    ctx.arc(
      left + width / 2,
      bottom - height / 2,
      (width + height) / 10,
      degreeToRadian(0),
      degreeToRadian(360),
      true
    );

    ctx.lineWidth = 10;
    ctx.strokeStyle = "#D9DCE4";

    ctx.stroke();

    ctx.setLineDash([]);

    // line arc 1
    ctx.beginPath();
    ctx.arc(
      left + width / 2,
      bottom - height / 2,
      (width + height) / 5 + 10,
      degreeToRadian(0),
      degreeToRadian(360),
      true
    );

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#E2E6EC";

    ctx.stroke();

    // line arc 2
    ctx.beginPath();
    ctx.arc(
      left + width / 2,
      bottom - height / 2,
      (width + height) / 5 + 15,
      degreeToRadian(0),
      degreeToRadian(360),
      true
    );

    ctx.lineWidth = 10;
    ctx.strokeStyle = "#F1F3F5";

    ctx.stroke();

    // line arc 3
    ctx.beginPath();
    ctx.arc(
      left + width / 2,
      bottom - height / 2,
      (width + height) / 5 + 35,
      degreeToRadian(0),
      degreeToRadian(360),
      true
    );

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#EAEEF3";

    ctx.stroke();
  },
};

let images: HTMLImageElement[] = [img1, img2, img3].map((image) => {
  const img = new Image();
  img.src = image;
  return img;
});

export const lineLabelsPlugin: DoughnutProps["plugin"] = {
  id: "lineLabelsPlugin",
  afterDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;

    ctx.save();

    chart.data.datasets.forEach((_, i) => {
      chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
        // console.log(datapoint.tooltipPosition(true))

        const { x, y } = datapoint.tooltipPosition(true) as {
          x: number;
          y: number;
        };

        const lineColor = "rgba(0,0,0,0.7)";
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        // square box

        const angle = 45 * (Math.PI / 180); // 45 degrees in radians

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        if (checkTheme()) {
          ctx.fillStyle = "white";
        } else {
          ctx.fillStyle = lineColor;
        }
        ctx.fillRect(0 - 2, 0 - 2, 4, 4);
        ctx.restore();

        // label and data positions
        const xLine = x >= halfWidth ? x + 40 : x - 40;
        const yLine = y >= halfHeight ? y + 60 : y - 60;
        const xStraightLine = x >= halfWidth ? 10 : -10;
        // console.log( y )
        // console.log(height)
        // console.log( halfHeight)
        // console.log( y >= halfHeight)

        // diagonal line
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineWidth = 2;
        ctx.lineTo(xLine, yLine);
        ctx.lineTo(xLine + xStraightLine, yLine);
        if(checkTheme()){
            ctx.strokeStyle = "white";
        } else {
            ctx.strokeStyle = lineColor;
        }
        ctx.stroke();

        // image
        const imageWidth = 25;
        const imageXPosition =
          x >= halfWidth
            ? xLine + xStraightLine
            : xLine + xStraightLine - imageWidth;

        const img = images[index];

        if (img.complete) {
          ctx.drawImage(
            img,
            imageXPosition,
            yLine - 15,
            imageWidth,
            imageWidth
          );
        } else {
          img.onload = () => chart.draw();
        }

        // texts
        const label = chart?.data?.labels?.[index] as string;
        const dataLabel = chart?.data?.datasets?.[i].data?.[index];

        // const textWidth = ctx.measureText(label).width
        ctx.font = "bold 12px Inter";
        // control the position
        ctx.textAlign = x >= halfWidth ? "left" : "right";
        ctx.textBaseline = "middle";

        if (checkTheme()) {
            console.log("update")
          ctx.fillStyle = "white";
          ctx.shadowColor = "rgba(0,0,0,0.5)";
        } else {
          ctx.fillStyle = "rgba(0,0,0,0.5)";
        }
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 6;
        ctx.fillText(label, xLine + xStraightLine, yLine + 20);
        if (checkTheme()) {
          ctx.fillStyle = "white";
        } else {
          ctx.fillStyle = "rgba(0,0,0,0.7)";
        }
        ctx.font = "800 14px Inter";
        if (checkTheme()) {
            ctx.shadowColor = "rgba(0,0,0,0.7)";
        }
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 6;
        ctx.fillText(`${dataLabel}%`, xLine + xStraightLine, yLine + 40);
      });
    });
  },
};
