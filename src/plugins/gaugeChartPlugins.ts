import type { DoughnutProps } from "@/types/chart";
import UsersImg from "@/assets/charts/users.svg";
import { degreeToRadian } from "@/utils/charts";
import { checkTheme } from "@/utils";

export const dashedArc: DoughnutProps["plugin"] = {
  id: "dashedArc",
  afterDatasetDraw(chart) {
    const {
      ctx,
      chartArea: { left, bottom, width, height },
    } = chart;

    ctx.save();

    // dashed arc
    ctx.setLineDash([2, 2]);

    ctx.beginPath();

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
  afterDatasetDraw(chart) {
    const {
      ctx,
      data,
      chartArea: { width , height },
    } = chart;

    const sum = data.datasets[0].data.reduce(
      (partialsum, a) => partialsum + a,
      0
    );
    ctx.save();

    // img
    if (img.complete) {
      ctx.drawImage(img, width / 2 - 10, height / 2 + 45 , 60, 60);
    } else {
      img.onload = () => chart.draw();
    }

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
      (height / 2 )+ 125
    );

    ctx.font = "14px Inter";
    if (checkTheme()) {
      ctx.fillStyle = "white";
    } else {
      ctx.fillStyle = "rgba(0,0,0,0.4)";
    }
    ctx.fillText("Total Users", width / 2 + 25, height / 2 + 160);
  },
};
