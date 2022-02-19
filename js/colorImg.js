function random (intmin,intmax) {
	while (!isNaN(intmax) && !isNaN(intmin) && !intmax.toString().match(/(-)/i)) {
		var randomno = Math.round(intmax * Math.random());
		if (randomno <= intmax && randomno >= intmin) {
			return randomno;
		}
	}
}
function clearData(Value) {
	switch (Value) {
		case "load":
			document.getElementById("raw").href = "";
			document.getElementById("raw").innerHTML = "";
			document.getElementById("download").href = "";
			document.getElementById("download").download = "";
			document.getElementById("download").innerHTML = "";

			document.getElementById("PicShareLink").innerHTML = "";
			document.getElementById("picNum").innerHTML = "loading";
			document.getElementById("loader").style.display = "unset";
			console.log("loading");
		break;

		case "":
		default:
			document.getElementById("loader").style.display = "none";
			document.getElementById("raw").href = "";
			document.getElementById("raw").innerHTML = "";
			document.getElementById("download").href = "";
			document.getElementById("download").download = "";
			document.getElementById("download").innerHTML = "";
		break;
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
			console.log("data is clean.");
			ColorImgJson = JSON.parse(request.response.slice(0,-3) + "]}");
		} else if (request.response.slice(-5).toString().match(/(},)/i)) {
			console.log("data has n/r.");
			ColorImgJson = JSON.parse(request.response.slice(0,-4) + "]}");
		} else if (request.response.slice(-6).toString().match(/(},)/i)) {
			console.log("data has r,n.");
			ColorImgJson = JSON.parse(request.response.slice(0,-5) + "]}");
		} else {
			console.log("try parse list data.");
			ColorImgJson = JSON.parse(request.response);
		}

		API1 = "https://image-koto.000webhostapp.com/?/Image/GetColorImg/";
		API2 = "https://drive-koto.vercel.app/api?raw=true&path=/Image/GetColorImg/";

		GetImgAPI = API1;


		FileMax = ColorImgJson.fileNum - 1;
		console.log("load List Done!");

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
		// Random img load
		console.log("Random mode.");
		picNum = random("0",FileMax);
		picName = ColorImgJson.pics[picNum].name;
		picLink = GetImgAPI + picName;
	} else if (!img == "") {
		// Specify img load
		console.log("Specify mode.");
		picLink = GetImgAPI + img;
		picName = img;
	} else {
		console.error("value error.");
		return null;
	}

	clearData("load");

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

		clearData("");

		try {
			if (GetImgAPI == API1) { 
				document.getElementById("picNum").innerHTML = "API1 may has error.try API2";
				console.error("API1 may has error,try API2");
				GetImgAPI = API2;
				Load(img);
			} else if (GetImgAPI == API2) {
				document.getElementById("picNum").innerHTML = "API2 may has error.";
				console.error("API2 may has error.");
			} else {
				document.getElementById("picNum").innerHTML = "Pic cannot load.Check you network connect.";
				console.error("Pic cannot load.Check you network connect.");
			}
		} catch (err) {
			document.getElementById("picNum").innerHTML = "switch API error,we will try fix the issue.";
			console.error("switch API error,we will try fix the issue.");
		}
	}
}


