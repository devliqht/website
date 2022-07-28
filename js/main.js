function open_sidebar() {
    document.getElementById("navbar-2").style.width = "250px";
}
function close_sidebar() {
    document.getElementById("navbar-2").style.width = "0";
}

const spotifyCurrent = localStorage.getItem("spotifyCurrent")
    ? localStorage.getItem("spotifyCurrent")
    : null;

const btnAllTime = document.getElementById("btnAllTime");
const btnLastMonth = document.getElementById("btnLastMonth");
const btnLast6Months = document.getElementById("btnLast6Months");

$(document).ready(function () {
    changeSpotify();
});

function changeSpotify(state) {
    if (state == "AllTime") {
        console.log("Selected All Time Best Songs");
        $("#currentSpotify").text("All Time");

        // #1
        $("#song-title-1").text("Love Shot");
        $("#song-artist-1").text("EXO");
        $("#song-duration-1").text("3:20");
        $("#song-cover-1").attr("src", "assets/kpop/loveshot.jpg");

        // 2
        $("#song-title-2").text("Zombie - English Ver.");
        $("#song-artist-2").text("DAY6");
        $("#song-duration-2").text("3:29");
        $("#song-cover-2").attr("src", "assets/kpop/zombie.jpg");

        // 3
        $("#song-title-3").text("Make A Wish (Birthday Song)");
        $("#song-artist-3").text("NCT U");
        $("#song-duration-3").text("3:49");
        $("#song-cover-3").attr("src", "assets/kpop/makeawish.jpg");

        // 4
        $("#song-title-4").text("You Calling My Name");
        $("#song-artist-4").text("GOT7");
        $("#song-duration-4").text("3:15");
        $("#song-cover-4").attr("src", "assets/kpop/youcallingmyname.jpg");

        // 5
        $("#song-title-5").text("Ghost Of You");
        $("#song-artist-5").text("5 Seconds Of Summer");
        $("#song-duration-5").text("3:29");
        $("#song-cover-5").attr("src", "assets/kpop/ghostofyou.jpg");

        // 6
        $("#song-title-6").text("8 Letters");
        $("#song-artist-6").text("Why Don't We");
        $("#song-duration-6").text("3:10");
        $("#song-cover-6").attr("src", "assets/kpop/8letters.jpg");

        // 7
        $("#song-title-7").text("Love Talk - English Version");
        $("#song-artist-7").text("WayV");
        $("#song-duration-7").text("3:52");
        $("#song-cover-7").attr("src", "assets/kpop/lovetalk.jpg");

        // 8
        $("#song-title-8").text("WHO DO U LOVE?");
        $("#song-artist-8").text("Monsta X, French Montana");
        $("#song-duration-8").text("3:09");
        $("#song-cover-8").attr("src", "assets/kpop/whodoulove.jpg");

        // 9
        $("#song-title-9").text("Dynamite");
        $("#song-artist-9").text("BTS");
        $("#song-duration-9").text("3:19");
        $("#song-cover-9").attr("src", "assets/kpop/dynamite.jpg");

        // 10
        $("#song-title-10").text("help herself (with BENEE)");
        $("#song-artist-10").text("bbno$, Diamond Pistols, BENEE");
        $("#song-duration-10").text("2:47");
        $("#song-cover-10").attr("src", "assets/kpop/helpherself.jpg");
    } else if (state == "Last6Months") {
        console.log("Selected Last 6 Months Best Songs");
        $("#currentSpotify").text("Last 6 Months");

        $("#song-title-1").text("Valley of Lies");
        $("#song-artist-1").text("TOMORROW X TOGETHER, iann dior");
        $("#song-duration-1").text("3:04");
        $("#song-cover-1").attr("src", "assets/kpop/valleyoflies.jpg");

        $("#song-title-2").text("Life's Too Short (English Version)");
        $("#song-artist-2").text("aespa");
        $("#song-duration-2").text("2:58");
        $("#song-cover-2").attr("src", "assets/kpop/lifetooshort.jpg");

        $("#song-title-3").text("colorblind");
        $("#song-artist-3").text("Mokita");
        $("#song-duration-3").text("3:14");
        $("#song-cover-3").attr("src", "assets/kpop/colorblind.jpg");

        $("#song-title-4").text("Spider");
        $("#song-artist-4").text("HOSHI");
        $("#song-duration-4").text("3:32");
        $("#song-cover-4").attr("src", "assets/kpop/spider.jpg");

        $("#song-title-5").text("LOVE COUNTDOWN (Feat. Wonstein)");
        $("#song-artist-5").text("NAYEON, Wonstein");
        $("#song-duration-5").text("3:18");
        $("#song-cover-5").attr("src", "assets/kpop/imnayeon.jpg");

        $("#song-title-6").text("Carried Away (Love To Love)");
        $("#song-artist-6").text("Surf Mesa, Madison Beer");
        $("#song-duration-6").text("3:03");
        $("#song-cover-6").attr("src", "assets/kpop/carriedaway.jpg");

        $("#song-title-7").text("Future Perfect (Pass The MIC)");
        $("#song-artist-7").text("ENHYPEN");
        $("#song-duration-7").text("3:01");
        $("#song-cover-7").attr("src", "assets/kpop/manifesto.jpg");

        $("#song-title-8").text("Car Crash");
        $("#song-artist-8").text("eaJ");
        $("#song-duration-8").text("3:07");
        $("#song-cover-8").attr("src", "assets/kpop/carcrash.jpg");

        $("#song-title-9").text(
            "California (Feat. Jackson Wang & Warren Hue) - [Remix]"
        );
        $("#song-artist-9").text(
            "88rising, Rich Brian, NIKI, Jackson Wang, Warren Hue"
        );
        $("#song-duration-9").text("4:34");
        $("#song-cover-9").attr("src", "assets/kpop/california.jpg");

        $("#song-title-10").text("DARARI");
        $("#song-artist-10").text("TREASURE");
        $("#song-duration-10").text("3:41");
        $("#song-cover-10").attr("src", "assets/kpop/dararari.jpg");
    } else if (state == "LastMonth") {
        console.log("Selected Last Month Best Songs");
        $("#currentSpotify").text("Last Month");
        // #1
        $("#song-title-1").text("Valley of Lies");
        $("#song-artist-1").text("TOMORROW X TOGETHER, iann dior");
        $("#song-duration-1").text("3:04");
        $("#song-cover-1").attr("src", "assets/kpop/valleyoflies.jpg");

        // 2
        $("#song-title-2").text("Life's Too Short (English Version)");
        $("#song-artist-2").text("aespa");
        $("#song-duration-2").text("2:58");
        $("#song-cover-2").attr("src", "assets/kpop/lifetooshort.jpg");

        // 3
        $("#song-title-3").text("Spider");
        $("#song-artist-3").text("HOSHI");
        $("#song-duration-3").text("3:32");
        $("#song-cover-3").attr("src", "assets/kpop/spider.jpg");

        // 4
        $("#song-title-4").text("LOVE COUNTDOWN (Feat. Wonstein)");
        $("#song-artist-4").text("NAYEON, Wonstein");
        $("#song-duration-4").text("3:18");
        $("#song-cover-4").attr("src", "assets/kpop/imnayeon.jpg");

        // 5
        $("#song-title-5").text("Future Perfect (Pass The MIC)");
        $("#song-artist-5").text("ENHYPEN");
        $("#song-duration-5").text("3:01");
        $("#song-cover-5").attr("src", "assets/kpop/manifesto.jpg");

        // 6
        $("#song-title-6").text("TFW (That Feeling When)");
        $("#song-artist-6").text("ENHYPEN");
        $("#song-duration-6").text("3:18");
        $("#song-cover-6").attr("src", "assets/kpop/manifesto.jpg");

        // 7
        $("#song-title-7").text("your love");
        $("#song-artist-7").text("brb., Jimmy Brown");
        $("#song-duration-7").text("2:36");
        $("#song-cover-7").attr("src", "assets/kpop/yourlove.jpg");

        // 8
        $("#song-title-8").text("Sour Grapes");
        $("#song-artist-8").text("LE SSERAFIM");
        $("#song-duration-8").text("3:17");
        $("#song-cover-8").attr("src", "assets/kpop/serafim.jpg");

        // 9
        $("#song-title-9").text("LIMBO");
        $("#song-artist-9").text("keshi");
        $("#song-duration-9").text("3:33");
        $("#song-cover-9").attr("src", "assets/kpop/limbo.jpg");

        // 10
        $("#song-title-10").text("Cat & Dog");
        $("#song-artist-10").text("TOMORROW X TOGETHER");
        $("#song-duration-10").text("3:07");
        $("#song-cover-10").attr("src", "assets/kpop/catdog.jpg");
    } else {
        console.log("No state selected");
    }
}
