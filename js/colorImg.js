function random (intmin,intmax) {
	while (!isNaN(intmax) && !isNaN(intmin) && !intmax.toString().match(/(-)/i)) {
		var randomno = Math.round(intmax * Math.random());
		if (randomno <= intmax && randomno >= intmin) {
			return randomno;
		}
	}
}

function windowload() {
	document.getElementById("picNum").innerHTML = "loading files list data";
	var requestURL = "../assets/ColorImg.txt";
	var request = new XMLHttpRequest();
	request.open("GET", requestURL,true);
	request.send(null);
	request.onload = function () {
		if (request.response.slice(-4).toString().match(/(},)/i)) {
			console.log("data is clean");
			ColorImgJson = JSON.parse(request.response.slice(0,-3) + "]}");
		} else if (request.response.slice(-5).toString().match(/(},)/i)) {
			console.log("data has n/r");
			ColorImgJson = JSON.parse(request.response.slice(0,-4) + "]}");
		} else if (request.response.slice(-6).toString().match(/(},)/i)) {
			console.log("data has r,n");
			ColorImgJson = JSON.parse(request.response.slice(0,-5) + "]}");
		}

		FileMax = ColorImgJson.fileNum -1;
		console.log("load List Done!")

		if (!GetQueryString("img").toString() == "") {
			var img = GetQueryString("img");
			Load(img);
		} else {
			Load("");
		}
	}

}
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
	var context = "";

	if (r != null)
		context = r[2];
	reg = null;
	r = null;
	return context == null || context == "" || context == "undefined" ? "" : context;
}
function Load(img) {
	if (img == "") {
		console.log("Random mode.");
		// Random img load
		picNum = random("0",FileMax);
		picName = ColorImgJson.pics[picNum].name;
		picLink = "https://drive-koto.vercel.app/api?path=/Image/GetColorImg/" + picName + "&raw=true";
	} else if (!img == "") {
		console.log("Specify mode.");
		// Specify img load
		picLink = "https://drive-koto.vercel.app/api?path=/Image/GetColorImg/" + img + "&raw=true";
		picName = img
	} else {
		console.log("寄吧的，寄（。");
		return null;
	}

	// hide o-data
	document.getElementById("raw").href = "";
	document.getElementById("raw").innerHTML = "";
	document.getElementById("download").href = "";
	document.getElementById("download").download = "";
	document.getElementById("download").innerHTML = "";

	document.getElementById("PicShareLink").innerHTML = "";
	document.getElementById("picNum").innerHTML = "loading";
	document.getElementById("loader").style.display = "unset"
	console.log("loading");

	document.getElementById("colorPic").src = picLink;

	// load done
	document.getElementById("colorPic").onload = function () {

		document.getElementById("raw").href = picLink;
		document.getElementById("raw").innerHTML = "VIEW RAW";
		document.getElementById("download").href = picLink;
		document.getElementById("download").download = picName;
		document.getElementById("download").innerHTML = "DOWNLOAD";

		document.getElementById("loader").style.display = "none";
		document.getElementById("picNum").innerHTML = "Pic = " + picName;

		document.getElementById("PicShareLink").innerHTML = "Share the image with this link!<br>" + window.location.protocol + "//" + window.location.host + window.location.pathname + "?img=" + picName;
		console.log("Image load successfully.")
	}

	// load error
	document.getElementById("colorPic").onerror = function () {
		document.getElementById("loader").style.display = "none";

		document.getElementById("raw").href = "";
		document.getElementById("raw").innerHTML = "";
		document.getElementById("download").href = "";
		document.getElementById("download").download = "";
		document.getElementById("download").innerHTML = "";

		document.getElementById("picNum").innerHTML = "Pic cannot load.Check you network connect.";
		console.error("Pic cannot load.Check you network connect.")
	}
}



/*
function loadPic(img) {
	// hide o-data
	document.getElementById("PicShareLink").innerHTML = "";
	document.getElementById("picNum").innerHTML = "loading";
	console.log("loading");
	document.getElementById("loader").style.display = "unset";

	// loading
	var picLink = "https://drive-koto.vercel.app/api?path=/Image/GetColorImg/" + img + "&raw=true";


	document.getElementById("download").href = picLink;
	document.getElementById("download").download = img;
	document.getElementById("colorPic").src = picLink;

	// load done
	document.getElementById("colorPic").onload = function () {
		document.getElementById("picNum").innerHTML = "Pic = " + ColorImgJson.pics[picNum].name + "<a href='" + picLink + "'>  VIEW RAW DATA</a>";
		document.getElementById("PicShareLink").innerHTML = "Share the image with this link!<br>" + window.location.href;
		console.log("Image load successfully.")
		document.getElementById("loader").style.display = "none";
	}

	// load error
	document.getElementById("colorPic").onerror = function () {
		document.getElementById("picNum").innerHTML = "Pic cannot load.Or you specified img is not exist.";
		console.error("Pic cannot load.Or you specified img is not exist.")
		document.getElementById("loader").style.display = "none";
	}

}
function loadNextPic() {

	// hide o-data
	document.getElementById("PicShareLink").innerHTML = "";
	document.getElementById("loader").style.display = "unset"
	document.getElementById("picNum").innerHTML = "loading";
	console.log("loading");

	// loading
	var picNum = random("0",FileMax);
	var picLink = "https://drive-koto.vercel.app/api?path=/Image/GetColorImg/" + ColorImgJson.pics[picNum].name + "&raw=true";


	document.getElementById("download").href = picLink;
	document.getElementById("download").download = ColorImgJson.pics[picNum].name;
	document.getElementById("colorPic").src = picLink;

	// load done
	document.getElementById("colorPic").onload = function () {
		document.getElementById("picNum").innerHTML = "Pic = " + ColorImgJson.pics[picNum].name + "<a href='" + picLink + "'>  VIEW RAW DATA</a>";
		document.getElementById("PicShareLink").innerHTML = "Share the image with this link!<br>" + window.location.protocol + "//" + window.location.host + window.location.pathname + "?img=" + ColorImgJson.pics[picNum].name;
		console.log("Image load successfully.")
		document.getElementById("loader").style.display = "none";
	}

	// load error
	document.getElementById("colorPic").onerror = function () {
		document.getElementById("picNum").innerHTML = "Pic cannot load.Check you network connect.";
		console.error("Pic cannot load.Check you network connect.")
		document.getElementById("loader").style.display = "none";
	}

}*/

