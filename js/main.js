var preloader = document.getElementById("preload");
var preloader_text = document.getElementById("preloader-text");
var preloadtxt = new Array ();
preloadtxt[0] = "This won't take long.";
preloadtxt[1] = "Relax while we preload the page.";
preloadtxt[2] = "Hello.";
preloadtxt[3] = "Wait a moment while we prepare things.";
preloadtxt[4] = "Handling your request.";

var i = Math.floor(preloadtxt.length * Math.random());
preloader_text.innerHTML = preloadtxt[i];

setTimeout(function(){
    preloader.style.opacity = 0;
}, 4000); 

setTimeout(function(){
    preloader.style.display = "none";
}, 4400); 

var search_input = document.getElementById("search");
search_input

function open_sidebar() { document.getElementById("navbar-2").style.width="250px"; }
function close_sidebar() { document.getElementById("navbar-2").style.width="0"; }
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; // store current theme as setting
const cb = document.getElementById("opt_color"); // the checkbox


// Get current theme setting;
// Load current theme on start
if (currentTheme) {
    if (currentTheme === 'dark') {
        cb.checked = true;
        document.documentElement.style.setProperty('--light', '#212121');
        document.documentElement.style.setProperty('--lighter', '#181818');
        document.documentElement.style.setProperty('--dark', '#EFEFEF');
        document.documentElement.style.setProperty('--darker', '#FFFFFF');
    } else if (currentTheme === 'light') {
        document.documentElement.style.setProperty('--light', '#EFEFEF');
        document.documentElement.style.setProperty('--lighter', '#FFFFFF');
        document.documentElement.style.setProperty('--dark', '#212121');
        document.documentElement.style.setProperty('--darker', '#181818');
    }
}

// Change theme
function opt_color() {
    if (cb.checked == true){
        localStorage.setItem('theme', 'dark'); //dark mode
        document.documentElement.style.setProperty('--light', '#212121');
        document.documentElement.style.setProperty('--lighter', '#181818');
        document.documentElement.style.setProperty('--dark', '#EFEFEF');
        document.documentElement.style.setProperty('--darker', '#FFFFFF');
    } else {
        localStorage.setItem('theme', 'light'); //light mode
        document.documentElement.style.setProperty('--light', '#EFEFEF');
        document.documentElement.style.setProperty('--lighter', '#FFFFFF');
        document.documentElement.style.setProperty('--dark', '#212121');
        document.documentElement.style.setProperty('--darker', '#181818');
    }
}

//    --dark: #181818;
// --lightdark: #212121;