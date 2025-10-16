import type { DoughnutProps } from "@/types/chart";
import img1 from "@/assets/charts/tokopedia.svg";
import img2 from "@/assets/charts/alibaba.svg";
import img3 from "@/assets/charts/amazon.svg";

const images = [img1, img2, img3];

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
        ctx.translate(x , y );
        ctx.rotate(angle);
        ctx.fillStyle = lineColor;
        ctx.fillRect(0 - 2 , 0 - 2 , 4, 4);
        ctx.restore();

        // label and data positions
        const xLine = x >= halfWidth ? x + 30 : x - 30;
        const yLine = y >= halfHeight ? y + 30 : y - 30;
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
        ctx.strokeStyle = lineColor;
        ctx.stroke();

        // image
        const imageWidth = 25;
        const imageXPosition =
          x >= halfWidth
            ? xLine + xStraightLine
            : xLine + xStraightLine - imageWidth;
        const img = new Image();
        img.src = images[index];
        ctx.drawImage(img, imageXPosition, yLine - 15, imageWidth, imageWidth);

        // texts
        const label = chart?.data?.labels?.[index] as string;
        const dataLabel = chart?.data?.datasets?.[i].data?.[index];

        // const textWidth = ctx.measureText(label).width
        ctx.font = "bold 12px Inter";
        // control the position
        ctx.textAlign = x >= halfWidth ? "left" : "right";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillText(label, xLine + xStraightLine, yLine + 20);
        ctx.fillStyle = "rgba(0,0,0,0.7)";
        ctx.font = "800 14px Inter";
        ctx.fillText(`${dataLabel}%`, xLine + xStraightLine, yLine + 40);
      });
    });
  },
};
