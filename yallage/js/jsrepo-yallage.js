// Encoding: UTF-8
// Made with heart by kobe-koto in AGPL-3.0 License License
// copyright 2021 kobe-koto

function windowforchoose (title,word,link) {
	document.getElementById("center_bg").style.display = "unset";
	document.getElementById("center_title").innerHTML = title;
	document.getElementById("center_words").innerHTML = word;
	document.getElementById("click_button").attributes.href.value = link;
}; // 如函數所示。。。看不懂真的沒救了吧。。

function changePageType(UA) {
	// 用"navigator.userAgent"來獲得瀏覽器UA & 使用正則表達式查找匹配字段。
	if (UA == "auto") {
		if (navigator.userAgent.match(/(rv)/i)) {
			// 我感jio這個是IE。。。
			var UAType = "IE";
			return UAType;
		} else if (navigator.userAgent.match(/(iPhone|Android)/i)) {
			windowforchoose ("檢查到的UA/窗口大小有特別適配，想看看嗎？"," ","./mobie/index.html");
			var UAType = "Mobie";
			return UAType;
		} else if (navigator.userAgent.match(/(iPad|Pad|HD)/i)) {
			windowforchoose ("檢查到的UA/窗口大小有特別適配，想看看嗎？"," ","./mobie/index.html");
			var UAType = "Pad";
			return UAType;
		} else if (navigator.userAgent.match(/(Mac|Windows)/i)) {
			var UAType = "Desktop";
			return UAType;
		} else {
			var UAType = "Others";
			return UAType;
		};
	} else {
		// 調試用，同上。
		if (UA.match(/(rv)/i)) {
			// 我感jio這個是IE。。。
			var UAType = "IE";
			return UAType;
		} else if (UA.match(/(iPhone|Android)/i)) {
			var UAType = "Mobie";
			return UAType;
		} else if (UA.match(/(iPad|Pad|HD)/i)) {
			var UAType = "Pad";
			return UAType;
		} else if (UA.match(/(Mac|Windows)/i)) {
			var UAType = "Desktop";
			return UAType;
		} else {
			var UAType = "Others";
			return UAType;
		};
	};
};

function hwscreen() {
	hide("warnscreen_bg");
}; // 兼容用。

function dpmodeswich(){
	// dpmode = document.getElementById("centercss").attributes.href.value;（dpmode的值,方便理解。）
	// dpmode是否爲night或light，切換為與之相反的東西。↓
	if (document.getElementById("centercss").attributes.href.value == "./css/full_night.css") { 
		// light模式。
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/sun.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_light.css";
		setCookie("display-mode","light");
		console.log ("sun: to light");
	} else if (document.getElementById("centercss").attributes.href.value == "./css/full_light.css") {
		// night模式。
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/moon.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_night.css";
		setCookie("display-mode","night");
		console.log ("moon: to night");
	} else {
		console.log ("what?");
		// 爲什麽會這樣呢?（）
	};
};

window.onload=function windowload (){

	// 檢查窗口大小，而後檢查UA（不知道要不要檢查ua。。。）。
	if (window.outerHeight > window.outerWidth) {
		windowforchoose ("檢查到的UA/窗口大小有特別適配，想看看嗎？"," ","./mobie/index.html");
	} else {
		changePageType("auto");
	};

	// 檢查Cookie，以判斷是否顯示warnscreen。
	if (getCookie("IsReadWarn") == "ture") {
		hide("warnscreen_bg");
	} else if (getCookie("IsReadWarn") == "false") {
		show("warnscreen_bg");
	} else {
		setCookie("IsReadWarn","false");
		show("warnscreen_bg");
	};

	// 判斷Cookie中displayMode為何，設定與之相應的css和img。↓
	if (getCookie("display-mode") == "light") {
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/sun.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_light.css";
		// light模式。
	} else if (getCookie("display-mode") == "night") {
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/moon.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_night.css";
		// night模式。
	} else {
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/sun.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_light.css";
		setCookie("display-mode","light");
		// 如果沒有定義(或值異常)displayMode，則設定為默認light模式 + 重置cookie。
	};
};

/* function hwscreen() {
	function sleep(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	};
	document.getElementById("warnscreenimg1").fill = "rgba(0,0,0,0)";
	document.getElementById("warnscreenimg2").fill = "rgba(0,0,0,0)";
	document.getElementById("warnscreen_button").style.backgroundColor = "rgba(0,0,0,0)";
	document.getElementById("warnscreen_button").style.border = "rgba(0,0,0,0)";
	document.getElementById("warnscreen_button_word").style.color = "rgba(0,0,0,0)";
	document.getElementById("warnscreen_bg").style.color = "rgba(0,0,0,0)";
	sleep(350).then(() => {
		document.getElementById("warnscreen_bg").style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById("warnscreen_bg").style.backdropFilter = "none";
		document.getElementById("warnscreen_button").style.display = "none";
		document.getElementById("warnscreen_words").style.display = "none";
		sleep(350).then(() => {
			document.getElementById("warnscreen_bg").style.display = "none";
		});
	});
}; */
