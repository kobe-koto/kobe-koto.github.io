function random (intmin,intmax) {
    while (!isNaN(intmax) && !isNaN(intmin) && !intmax.match(/(-)/i)) {
        var randomno = Math.round(intmax * Math.random());
        if (randomno <= intmax && randomno >= intmin) {
            return randomno;
        }
    }
}


function windowload() {

    // hide o-img
    document.getElementById("downloadColorPic").style.display = "none";
    document.getElementById("loader").style.display = "unset";
    document.getElementById("picNum").innerHTML = "loading";
    console.log("loading");

    // loading
    var picNum = random("1","220");
    var picLink = "https://drive-koto.vercel.app/api?path=/Image/colorImg/" + picNum + ".png&raw=true";

    document.getElementById("downloadColorPic").href = picLink;
    document.getElementById("downloadColorPic").download = picNum + ".png";
    document.getElementById("colorPic").src = picLink;

    // load done
    document.getElementById("colorPic").onload = (
        function () {
            document.getElementById("picNum").innerHTML = "PicNum = " + picNum;
            document.getElementById("downloadColorPic").style.display = "unset";
            document.getElementById("loader").style.display = "none";
        }
    )
    // load error
    document.getElementById("colorPic").onerror = (
        function () {
            document.getElementById("loader").style.display = "none";
            document.getElementById("picNum").innerHTML = "Pic cannot load.Check you network connect.";
            console.error("Pic cannot load.Check you network connect.")
        }
    )

}
