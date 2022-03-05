/* Encoding: UTF-8
* Made with heart by kobe-koto in AGPL-3.0 License License
* copyright 2021 kobe-koto */


function random (intmin,intmax) {
	//get a random num
	while (!isNaN(intmax) && !isNaN(intmin) && !intmax.toString().match(/(-)/i)) {
		var randomno = Math.round(intmax * Math.random());
		if (randomno <= intmax && randomno >= intmin) {
			return randomno;
		}
	}
}

function copyPicShareLink() {
	try {
		navigator.clipboard.writeText(ShareLink);
		console.log("successful.");
		alert("successful.");
	} catch (err) {
		console.error("cannot copy link.")
		alert("cannot copy link.");
	}
}

function clearData(Value) {
	//clear old data,use for reload a new img
	switch (Value) {
		case "load":
			document.getElementById("raw").href = "";
			document.getElementById("lock").href = "";
			document.getElementById("download").href = "";
			document.getElementById("download").download = "";

			document.getElementById("picNum").innerHTML = "loading";

			document.getElementById("CheckImg").style.backgroundImage = "url(../images/load.svg)";

			console.log("loading");
		break;

		case "":
		default:
			document.getElementById("raw").href = "";
			document.getElementById("lock").href = "";
			document.getElementById("download").href = "";
			document.getElementById("download").download = "";
			document.getElementById("CheckImg").style.backgroundImage = "url(../images/load.svg)";
		break;
	}
}

function windowload() {

	//on window loaded,request ColorImg database(?) & auto parse data,support n/r|r,n|clean|lowSuccessRateRaw.
	document.getElementById("picNum").innerHTML = "loading files list data";
	if (window.location.protocol.match(/(file|data)/i)) {
		alert(window.location.protocol + "下无法加载DataBase");
		console.log(window.location.protocol + "下无法加载DataBase");
	} else {
		var requestURL = "../assets/ColorImg.txt";
		var request = new XMLHttpRequest();
		request.open("GET", requestURL,true);
		request.send();
		request.onerror = function () {
			document.getElementById("picNum").innerHTML = "ERROR! cannot loading files list data.";
			console.error("ERROR! cannot loading files list data.");
			document.getElementById("colorPic").src = "../images/error.svg";
			document.getElementById("CheckImg").style.backgroundImage = "url(../images/error.svg)";
			return null;
		}
		request.onload = function () {
			try {
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
			} catch (err) {
				console.error("ERROR! cannot parse file list data");
				document.getElementById("picNum").innerHTML = "ERROR! cannot parse file list data";
				document.getElementById("colorPic").src = "../images/error.svg";
				document.getElementById("CheckImg").style.backgroundImage = "url(../images/error.svg)";
				alert("无法解析DataBase");
				console.log("无法解析DataBase");
				return null;
			}

			FileMax = ColorImgJson.fileNum - 1;
			//var PicNumMax

			API1 = "https://drive-koto.vercel.app/api?raw=true&path=/Image/GetColorImg/";
			API2 = "https://image-koto.000webhostapp.com/?/Image/GetColorImg/";
			GetImgAPI = API1;
			//var APIs

			console.log("load List Done!");

			if (!GetQueryString("img").toString() == "") {
				var img = GetQueryString("img");
				Load(img);
			} else {
				Load("");
			}
			//mode auto,support Specify & Random.
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
	//load a new Img from varied API.
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
		document.getElementById("colorPic").src = "../images/error.svg";
		document.getElementById("CheckImg").style.backgroundImage = "url(../images/error.svg)";
		return null;
	}
	clearData("load");

	ShareLink = window.location.protocol + "//" + window.location.host + window.location.pathname + "?img=" + picName;
	document.getElementById("colorPic").src = picLink;

	// load done
	document.getElementById("colorPic").onload = function () {

		document.getElementById("raw").href = picLink;
		document.getElementById("lock").href = ShareLink;
		document.getElementById("download").href = picLink;
		document.getElementById("download").download = picName;

		document.getElementById("picNum").innerHTML = "Pic = " + picName;
		document.getElementById("CheckImg").style.backgroundImage = "url(../images/check.svg)";

		console.log("Image load successfully.")
	}

	// load error
	document.getElementById("colorPic").onerror = function () {

		clearData("");
		document.getElementById("colorPic").src = "../images/error.svg";
		document.getElementById("CheckImg").style.backgroundImage = "url(../images/error.svg)";

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
			document.getElementById("CheckImg").style.backgroundImage = "url(../images/error.svg)";
		}
	}
}


