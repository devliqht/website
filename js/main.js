function open_sidebar() {
    document.getElementById("navbar-2").style.width = "250px";
}
function close_sidebar() {
    document.getElementById("navbar-2").style.width = "0";
}
const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
const cb = document.getElementById("opt_color");
if (currentTheme) {
    if (currentTheme === "dark") {
        cb.checked = true;
        document.documentElement.style.setProperty("--light", "#212121");
        document.documentElement.style.setProperty("--lighter", "#181818");
        document.documentElement.style.setProperty("--dark", "#EFEFEF");
        document.documentElement.style.setProperty("--darker", "#FFFFFF");
    } else if (currentTheme === "light") {
        document.documentElement.style.setProperty("--light", "#EFEFEF");
        document.documentElement.style.setProperty("--lighter", "#FFFFFF");
        document.documentElement.style.setProperty("--dark", "#212121");
        document.documentElement.style.setProperty("--darker", "#181818");
    }
}
function opt_color() {
    if (cb.checked == true) {
        localStorage.setItem("theme", "dark");
        document.documentElement.style.setProperty("--light", "#212121");
        document.documentElement.style.setProperty("--lighter", "#181818");
        document.documentElement.style.setProperty("--dark", "#EFEFEF");
        document.documentElement.style.setProperty("--darker", "#FFFFFF");
    } else {
        localStorage.setItem("theme", "light");
        document.documentElement.style.setProperty("--light", "#EFEFEF");
        document.documentElement.style.setProperty("--lighter", "#FFFFFF");
        document.documentElement.style.setProperty("--dark", "#212121");
        document.documentElement.style.setProperty("--darker", "#181818");
    }
}
