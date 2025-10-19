import type { DoughnutProps } from "@/types/chart";
import UsersImg from "@/assets/charts/users.svg";

const img = new Image();
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
      ctx.drawImage(img, width / 2 - 30, bottom - 185, 60, 60);
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
    ctx.fillStyle = "rgba(0,0,0,0.7)";
    ctx.fillText(
      `${sum}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      width / 2,
      bottom - 100
    );

    ctx.font = "14px Inter";
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillText("Total Users", width / 2, bottom - 70);
  },
};
