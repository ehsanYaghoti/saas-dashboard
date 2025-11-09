import type { DoughnutProps } from "@/types/chart";
import UsersImg from "@/assets/charts/users.svg";
import { degreeToRadian } from "@/utils/charts";
import { checkTheme, getWindowsWidth } from "@/utils";

type GetCoordinateY = (
  bottom: number,
  height?: number
) => { lineArcY: number; imgY: number; numY: number; textY: number };

const getCoordinateY: GetCoordinateY = (bottom, height) => {
  const width = getWindowsWidth();
  if (width == "xxl") {
    return {
      lineArcY: bottom - (height as number) / 2 + 55,
      imgY: bottom - 185,
      numY: bottom - 100,
      textY: bottom - 70,
    };
  } else if (width == "xxs") {
    return {
      lineArcY: bottom - (height as number) / 2 + 40,
      imgY: bottom - 125,
      numY: bottom - 50,
      textY: bottom - 20,
    };
  } else if (width === "xs" || width === "lg") {
    return {
      lineArcY: bottom - (height as number) / 2 + 50,
      imgY: bottom - 150,
      numY: bottom - 65,
      textY: bottom - 30,
    };
  } else if (width === "sm" ) {
    return {
      lineArcY: bottom - (height as number) / 2 + 60,
      imgY: bottom - 150,
      numY: bottom - 65,
      textY: bottom - 30,
    };
  } else if (width === "md" ) {
    return {
      lineArcY: bottom - (height as number) / 2 + 46,
      imgY: bottom - 150,
      numY: bottom - 65,
      textY: bottom - 30,
    };
  } else {
    return {
      lineArcY: bottom - (height as number) / 2,
      imgY: bottom - 185,
      numY: bottom - 100,
      textY: bottom - 70,
    };
  }
};

export const dashedArc: DoughnutProps["plugin"] = {
  id: "dashedArc",
  afterDatasetDraw(chart) {
    const {
      ctx,
      chartArea: { left, bottom, width, height },
    } = chart;

    // console.log(options.scales)
    ctx.save();

    // const arcs = chart.getDatasetMeta(0).data as ArcElement[];
    // const points : {x : number , y : number}[] = [];

    // arcs.forEach((arc) => {
    //   const { x, y, outerRadius, startAngle, endAngle } = arc;

    //   const topAngle = (startAngle + endAngle) / 2; // midpoint angle of arc
    //   const topX = x + Math.cos(topAngle - Math.PI / 2) * outerRadius;
    //   const topY = y + Math.sin(topAngle - Math.PI / 2) * outerRadius;
    //   points.push({ x: topX, y: topY });
    // });

    // const topmost = points.reduce((a, b) => (a.y < b.y ? a : b));
    // console.log("Topmost point:", topmost);

    // dashed arc
    ctx.setLineDash([2, 2]);

    ctx.beginPath();
    // ctx.arc(
    //   left + width / 2,
    //   bottom - height / 3 + 10,
    //   (width + height) / 5 + 30,
    //   degreeToRadian(10),
    //   degreeToRadian(170),
    //   true
    // );

    ctx.arc(
      left + width / 2,
      bottom - height / 3 + 10,
      (width + height) / 5 + 30,
      degreeToRadian(10),
      degreeToRadian(170),
      true
    );

    ctx.lineWidth = 15;
    ctx.strokeStyle = "#D9DCE4";

    ctx.stroke();

    ctx.setLineDash([]);

    // line arc
    ctx.beginPath();
    ctx.arc(
      left + width / 2,
      bottom - height / 3 + 10,
      (width + height) / 5 + 16,
      degreeToRadian(10),
      degreeToRadian(170),
      true
    );

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#DBE1EA";

    ctx.stroke();
  },
};

export const img = new Image();
img.src = UsersImg;

export const textsMiddle: DoughnutProps["plugin"] = {
  id: "labelsMiddle",
  beforeDatasetDraw(chart) {
    const {
      ctx,
      data,
      chartArea: { bottom, width },
    } = chart;

    const sum = data.datasets[0].data.reduce(
      (partialsum, a) => partialsum + a,
      0
    );
    ctx.save();

    // img
    if (img.complete) {
      ctx.drawImage(img, width / 2 - 10, getCoordinateY(bottom).imgY, 60, 60);
    } else {
      img.onload = () => chart.draw();
    }

    // img.onload = () => {
    //     ctx.drawImage(img , width / 2 - 30 , bottom - 185 , 60 , 60);
    // }

    // texts
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 30px Inter";
    if (checkTheme()) {
      ctx.fillStyle = "white";
    } else {
      ctx.fillStyle = "rgba(0,0,0,0.7)";
    }
    ctx.fillText(
      `${sum.toLocaleString()}`,
      width / 2 + 25,
      getCoordinateY(bottom).numY
    );

    ctx.font = "14px Inter";
    if (checkTheme()) {
      ctx.fillStyle = "white";
    } else {
      ctx.fillStyle = "rgba(0,0,0,0.4)";
    }
    ctx.fillText("Total Users", width / 2 + 25, getCoordinateY(bottom).textY);
  },
};
