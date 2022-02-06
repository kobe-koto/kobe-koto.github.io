function random (intmin,intmax) {
    while (!isNaN(intmax) && !isNaN(intmin) && !intmax.match(/(-)/i)) {
        var randomno = Math.round(intmax * Math.random());
        if (randomno <= intmax && randomno >= intmin) {
            return randomno;
        }
    }
}


function windowload() {
    // del o-img
    document.getElementById("downloadColorPic").style.display = "none";
    document.getElementById("picNum").innerHTML = "Pic is loading,wait for you network!XD";
    console.log("Pic is loading,pls wait for you network!XD");

    // loading
    var picNum = random("1","220");
    var picLink = "https://drive-koto.vercel.app/api?path=/Image/colorImg/" + picNum + ".png&raw=true";

    document.getElementById("downloadColorPic").href = picLink;
    document.getElementById("downloadColorPic").download = picLink;
    document.getElementById("colorPic").src = picLink;

    // load done
    document.getElementById("colorPic").onload = (
        function () {
            document.getElementById("picNum").innerHTML = "PicNum = " + picNum;
            document.getElementById("downloadColorPic").style.display = "unset";
        }
    )
    // load error
    document.getElementById("colorPic").onerror = (
        function () {
            document.getElementById("picNum").innerHTML = "An error has occurred here, please try again.Or check if you can connect to the network correctly and \"drive-koto.vercel.app\"" + "<br>" + "這裏發生了一個錯誤，請再試一遍。或者檢查您是否能正確連結網絡和\"drive-koto.vercel.app\"";
        }
    )
}
