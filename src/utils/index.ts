export function numberWithCommas(x : number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export function checkTheme() {
    console.log(
    document.documentElement.classList.contains("dark")
    )
    return document.documentElement.classList.contains("dark");
}
