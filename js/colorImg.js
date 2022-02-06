function random (intmin,intmax) {
    while (!isNaN(intmax) && !isNaN(intmin) && !intmax.match(/(-)/i)) {
        var randomno = Math.round(intmax * Math.random());
        if (randomno <= intmax && randomno >= intmin) {
            return randomno;
        }
    }
}
function windowload() {
    var picNum = random("1","76");
    document.getElementById("picNum").innerHTML = "PicNum = " + picNum;
    document.getElementById("downloadColorPic").href = "https://drive-koto.vercel.app/api?path=/Image/colorImg/" + picNum + ".png&raw=true";
    document.getElementById("downloadColorPic").download = "https://drive-koto.vercel.app/api?path=/Image/colorImg/" + picNum + ".png&raw=true";
    document.getElementById("colorPic").src = "https://drive-koto.vercel.app/api?path=/Image/colorImg/" + picNum + ".png&raw=true";
}
