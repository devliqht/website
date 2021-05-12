var preloader = document.getElementById("preload");var preloader_text = document.getElementById("preloader-text");
var preloader_subtext = document.getElementById("preloader-subtext");var preloader_bar = document.getElementById("loading_bar");
var preloadtxt = new Array (); preloadtxt[0] = "This won't take long."; preloadtxt[1] = "Relax while we preload the page."; preloadtxt[2] = "Hello."; preloadtxt[3] = "Wait a moment while we prepare things."; preloadtxt[4] = "Handling your request.";
var preloadsubtxt = new Array(); preloadsubtxt[0] = "Loading darkmodeswitch.css..."; preloadsubtxt[1] = "Loading keyframes.css..."; preloadsubtxt[2] = "Loading navbar.css..."; preloadsubtxt[3] = "Loading page.css..."; preloadsubtxt[4] = "Loading responsive.css..."; preloadsubtxt[5] = "Loading timeline.css..."; preloadsubtxt[6] = "Loading util.css..."; preloadsubtxt[7] = "Loading main.js..."; preloadsubtxt[8] = "Initializing index.html...";
var width = 0;var subtxt_order = 0;var loadinterval = setInterval(frame, 37);var textinterval = setInterval(subtxt, 250);
function frame(){if(width>=100){clearInterval(loadinterval);}else{width++;preloader_bar.style.width=width+'%';}}
function subtxt(){if (subtxt_order>=8){clearInterval(textinterval);}else{subtxt_order++;preloader_subtext.innerHTML=preloadsubtxt[subtxt_order];} }
var i = Math.floor(preloadtxt.length * Math.random());preloader_text.innerHTML = preloadtxt[i];
setTimeout(function(){preloader.style.opacity = 0;},6000);setTimeout(function(){preloader.style.display = "none";},6400); 