export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function checkTheme() {
  return document.documentElement.classList.contains("dark");
}

export function getWindowsWidth() {
  let width = window.innerWidth;
  let widthString = "";

  console.log(width);
  switch (true) {
    case width <= 320:
      return (widthString = "xxs");
    case width <= 375 && 320 < width:
      return (widthString = "xs");
    case (width <= 425 || width <= 426) && 375 < width:
      return (widthString = "sm");
    case width <= 768 && 425 < width:
      return (widthString = "md");
    case width <= 1024 && 768 < width:
      return (widthString = "lg");
    case width <= 1440 && 1024 < width:
      return (widthString = "xl");
    case 1440 <= width && width < 2560:
      return (widthString = "xxl");
    case 2560 <= width:
      return (widthString = "xxxl");
    default:
      widthString = "xl";
      break;
  }

  return widthString;
}
