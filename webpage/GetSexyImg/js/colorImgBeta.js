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



		case "":
		default:
			document.getElementById("raw").href = "";
			document.getElementById("lock").href = "";
			document.getElementById("download").href = "";
			document.getElementById("download").download = "";
			if (window.location.toString().match(/(gay|fur)/i)) {
				document.getElementById("CheckImg").style.backgroundImage = "url(../images/load.svg)";
			} else {
				document.getElementById("CheckImg").style.backgroundImage = "url(./images/load.svg)";
			}
		case "load":
			document.getElementById("picNum").innerHTML = "INFO: 載入中";
			break;
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
		console.log("隨機圖像模式");
		picName = ColorImgJson.pics[(random("0",(ColorImgJson.fileNum - 1)))].name;
		picLink = GetImgAPI + picName;
	} else if (!img == "") {
		// Specify img load
		console.log("指定圖像Name模式.");
		picName = img;
		picLink = GetImgAPI + img;
	} else {
		console.error("數·值·錯·誤·!");
		if (window.location.toString().match(/(gay|fur)/i)) {
			document.getElementById("colorPic").src = "../images/error.svg";
			document.getElementById("CheckImg").style.backgroundImage = "url(../images/error.svg)";
		} else {
			document.getElementById("colorPic").src = "./images/error.svg";
			document.getElementById("CheckImg").style.backgroundImage = "url(./images/error.svg)";
		}
		return null;
	}
	clearData("load");

	ShareLink = window.location.protocol + "//" + window.location.host + window.location.pathname + "?img=" + picName;
	document.getElementById("colorPic").src = picLink;

	// load error
	document.getElementById("colorPic").onerror = function () {
		document.getElementById("colorPic").onload = null;

		clearData("");

		if (window.location.toString().match(/(gay|fur)/i)) {
			document.getElementById("colorPic").src = "../images/error.svg";
			document.getElementById("CheckImg").style.backgroundImage = "url(../images/error.svg)";
		} else {
			document.getElementById("colorPic").src = "./images/error.svg";
			document.getElementById("CheckImg").style.backgroundImage = "url(./images/error.svg)";
		}


		try {
			if (GetImgAPI == API1) {
				document.getElementById("colorPic").onload = null;
				document.getElementById("picNum").innerHTML = "ERROR: API1 或許不可用, 將嘗試 API2.";
				console.error("API1 或許不可用, 將嘗試 API2.");
				GetImgAPI = API2;
				Load(img);
			} else if (GetImgAPI == API2) {
				document.getElementById("colorPic").onload = null;
				document.getElementById("picNum").innerHTML = "ERROR: API1 && API2 均不可用, 或是您的網路配置有問題, 亦可能是您無法鏈接至 API1 && API2.";
				console.error("API1 && API2 均不可用, 或是您的網路配置有問題, 亦可能是您無法連綫至 API1 && API2.");
				return null;
			} else {
				document.getElementById("picNum").innerHTML = "ERROR: 圖像無法載入, 所設置的 API 與 API1["+API1+"] 和API2 ["+API2+"] 均不匹配, 或是遇到未知錯誤, 這通常是kobekoto以外的人未經同意修改了程式碼.";
				console.error("圖像無法載入, 所設置的 API 與 API1["+API1+"] 和API2 ["+API2+"] 均不匹配, 或是遇到未知錯誤, 這通常是kobekoto以外的人未經同意修改了程式碼.");
				return null;
			}
		} catch (err) {
			document.getElementById("picNum").innerHTML = "ERROR: 無法切換API.";
			console.error("無法切換API.");


			if (window.location.toString().match(/(gay|fur)/i)) {
				document.getElementById("colorPic").src = "../images/error.svg";
				document.getElementById("CheckImg").style.backgroundImage = "url(../images/error.svg)";
			} else {
				document.getElementById("colorPic").src = "./images/error.svg";
				document.getElementById("CheckImg").style.backgroundImage = "url(./images/error.svg)";
			}
		}
	}

	// load done
	document.getElementById("colorPic").onload = function () {

		document.getElementById("raw").href = picLink;
		document.getElementById("lock").href = ShareLink;
		document.getElementById("download").href = picLink;
		document.getElementById("download").download = picName;

		document.getElementById("picNum").innerHTML = "您要的銫圖 [ " + picName + " ]";

		if (window.location.toString().match(/(gay|fur)/i)) {
			document.getElementById("CheckImg").style.backgroundImage = "url(../images/check.svg)";
		} else {
			document.getElementById("CheckImg").style.backgroundImage = "url(./images/check.svg)";
		}

		console.log("INFO: 圖像成功載入...您要的銫圖!")
	}
}

function windowload (isMoveInfoZone,databaseType) {

	if (isMoveInfoZone === "false") {
		console.log("將不會讓InfoZone可拖動。");
	} else if (isMoveInfoZone == "true") {
		console.log("將會讓InfoZone可拖動。");
		document.getElementById("InfoZone").onmousedown = function (e) {
			//on mouse press on the element, record the element XY as disX & disY.
			var disX = e.clientX - document.getElementById("InfoZone").offsetLeft;
			var disY = e.clientY - document.getElementById("InfoZone").offsetTop;
			document.onmousemove = function (e) {
				//cale coordinate to move.
				var tX = e.clientX - disX;
				var tY = e.clientY - disY;
				//move the element.
				if (tX >= 0 && tX <= window.innerWidth - document.getElementById("InfoZone").offsetWidth) {
					document.getElementById("InfoZone").style.left = tX + 'px';
				}
				if (tY >= 0 && tY <= window.innerHeight - document.getElementById("InfoZone").offsetHeight) {
					document.getElementById("InfoZone").style.top = tY + 'px';
				}
			}
			//delete event when mouse up.
			document.onmouseup = document.body.onmouseup = function () {
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
	}

	document.getElementById("picNum").innerHTML = "INFO: 正在載入銫圖列表";

	if (window.location.protocol.match(/(file|data)/i)) {
		alert(window.location.protocol + "下无法加载DataBase");
		console.log(window.location.protocol + "下无法加载DataBase");
	} else {
		//config ColorImg database loc.
		if (window.location.toString().match(/(gay|fur)/i)) {
			requestURL = "../database/"+databaseType+".txt";
		} else {
			requestURL = "./database/"+databaseType+".txt";
		}

		//request ColorImg database.
		request = new XMLHttpRequest();
		request.open("GET", requestURL, true);
		request.send();
		request.onerror = function () {
			document.getElementById("picNum").innerHTML = "ERROR: 列表無法載入";
			console.error("ERROR! cannot loading files list data.");
			document.getElementById("colorPic").src = "./images/error.svg";
			document.getElementById("CheckImg").style.backgroundImage = "url(./images/error.svg)";
			return null;
		}
		request.onload = function () {
			//parse data as JSON.
			ColorImgJson = JSON.parse(request.response);

			//var APIs.
			API1 = "https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/"+databaseType+"/";
			API2 = "https://image-koto.000webhostapp.com/?/Image/GetColorImg/"+databaseType+"/";
			GetImgAPI = API1;


			console.log("INFO: 成功載入了列表!");

			//mode auto,support Specify & Random.
			if (!GetQueryString("img").toString() == "") {
				var img = GetQueryString("img");
				Load(img);
			} else {
				Load("");
			}

		}
	}

}


