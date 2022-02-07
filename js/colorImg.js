function random (intmin,intmax) {
	while (!isNaN(intmax) && !isNaN(intmin) && !intmax.match(/(-)/i)) {
		var randomno = Math.round(intmax * Math.random());
		if (randomno <= intmax && randomno >= intmin) {
			return randomno;
		}
	}
}

var requestURL = "../assets/ColorImg.txt";
var request = new XMLHttpRequest();
request.withCredentials = true;
request.crossOrigin = "Anonymous";
request.open("GET", requestURL,true);
request.send(null);
request.onload = function () {
	ColorImgJson = request.response;
	console.log("done!")
}

function windowload() {

	// hide o-img
	document.getElementById("downloadColorPic").style.display = "none";
	document.getElementById("loader").style.display = "unset";

	document.getElementById("picNum").innerHTML = "loading";
	console.log("loading");

	// loading
	var picNum = random("1","866");
	// var picLink = "https://drive-koto.vercel.app/api?path=/Image/colorImg/" + picNum + ".png&raw=true";
	var picLink = ColorImgJson.folder.value[picNum]["@microsoft.graph.downloadUrl"];

	document.getElementById("downloadColorPic").href = picLink;
	document.getElementById("downloadColorPic").download = picNum + ".png";
	document.getElementById("colorPic").src = picLink;

	// load done
	document.getElementById("colorPic").onload = function () {
		document.getElementById("loader").style.display = "none";
		document.getElementById("picNum").innerHTML = "PicNum = " + picNum;
		document.getElementById("downloadColorPic").style.display = "unset";
	}

	// load error
	document.getElementById("colorPic").onerror = function () {
		document.getElementById("loader").style.display = "none";
		document.getElementById("picNum").innerHTML = "Pic cannot load.Check you network connect.";
		console.error("Pic cannot load.Check you network connect.")
	}

}








