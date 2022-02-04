// Encoding: UTF-8
// Made with heart by kobe-koto in AGPL-3.0 License License
// copyright 2021 kobe-koto

function checkIP (host,callId) {
	document.getElementById(callId).innerHTML = " Checking";
	var img = new Image();
	var flag = false;
	var isCloseWifi = true;
	var hasFinish = false;
	setTimeout(function(){
		isCloseWifi = false;
	},2);
	img.src = 'http://' + host + '/' + new Date().getTime();
	img.onload = img.onerror = function() {
		if ( !hasFinish ) {
			flag = true;
			hasFinish = true;
			console.log('Ping ' + host + ' success. ');
			document.getElementById(callId).innerHTML = " 連結成功";
		}
	};
	var timer = setTimeout(function() {
		if ( !flag ) {
			hasFinish = true;
			flag = false ;
			console.log('Ping ' + host + ' fail. ');
			document.getElementById(callId).innerHTML = " 連結失敗";
		}
	}, 5000);
}
function ChooseWindow (title, word, link) {
	createElement("div","<div class=\"WarnScreen_words\"><h2>"+title+"</h2><h4>"+word+"</h4><div class=\"WarnScreen_button\"><button class=\"shakecolor_button\" onclick=\""+link+"\">好</button><button class=\"shakecolor_button\" onClick=\"deleteElement('WarnScreen_tmpMsg');\"><a>不要</a></button></div></div>","body","WarnScreen_bg","WarnScreen_tmpMsg");
	// 如函數所示。。()
}
function createElement (element,info,root,className,id) {
	var element_root = document.createElement(element);
	element_root.innerHTML = info;
	element_root.className = className;
	element_root.id = id;
	document.getElementById(root).appendChild(element_root);
}
function deleteElement (elementId) {
	setTimeout(function () {
		document.getElementById(elementId).style.display = 'none';// for IE
	},1)
	setTimeout(function () {
		document.getElementById(elementId).remove();// full del
	},1)
}
function changePageType(UA) {
	// 用"navigator.userAgent"來獲得瀏覽器UA & 使用正則表達式查找匹配字段。
	if (UA == "auto") {
		if (navigator.userAgent.match(/(rv)/i)) {
			// 我感jio這個是IE。。。
			return "IE";
		} else if (navigator.userAgent.match(/(iPhone|Android)/i)) {
			ChooseWindow ("檢查到的UA/窗口大小有特別適配，想看看嗎？"," ","document.getElementById('typecss').href = './css/mobie_main.css';deleteElement('WarnScreen_tmpMsg');");
			return "Mobie";
		} else if (navigator.userAgent.match(/(iPad|Pad|HD)/i)) {
			ChooseWindow ("檢查到的UA/窗口大小有特別適配，想看看嗎？"," ","document.getElementById('typecss').href = './css/mobie_main.css';deleteElement('WarnScreen_tmpMsg');");
			return "Pad";
		} else if (navigator.userAgent.match(/(Mac|Windows)/i)) {
			return "Desktop";
		} else {
			return "Others";
		}
	} else {
		// 調試用，同上。
		if (UA.match(/(rv)/i)) {
			// 我感jio這個是IE。。。
			return "IE";
		} else if (UA.match(/(iPhone|Android)/i)) {
			return "Mobie";
		} else if (UA.match(/(iPad|Pad|HD)/i)) {
			return "Pad";
		} else if (UA.match(/(Mac|Windows)/i)) {
			return "Desktop";
		} else {
			return "Others";
		}
	}
}

function hwscreen() {
	hide("WarnScreen_bg");
} // 兼容用。

function dpmodeswich(){
	// dpmode = document.getElementById("centercss").attributes.href.value;（dpmode的值,方便理解。）
	// dpmode是否爲night或light，切換為與之相反的東西。↓
	if (document.getElementById("centercss").attributes.href.value == "./css/full_night.css") { 
		// light模式。
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/sun.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_light.css";
		setCookie("display-mode","light");
	} else if (document.getElementById("centercss").attributes.href.value == "./css/full_light.css") {
		// night模式。
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/moon.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_night.css";
		setCookie("display-mode","night");
	} else {
		console.log ("what?");
		// 爲什麽會這樣呢?（）
	}
}

function windowload () {

	document.getElementById("yallageIco").volume = 0;
	var YallageIcoVideoNotPlayFixer = ((function () {
		if (!document.getElementById("yallageIco").paused) {
			clearInterval(YallageIcoVideoNotPlayFixer);
		} else if (document.getElementById("yallageIco").paused) {
			document.getElementById("yallageIco").play();
		}
	}),100)

	if (!window.location.href.match(/(mobie)/i)) {
		// 檢查窗口大小，而後檢查UA（不知道要不要檢查ua。。。）。
		if (window.outerHeight > window.outerWidth) {
			ChooseWindow ("檢查到的UA/窗口大小有特別適配，想看看嗎？"," ","document.getElementById('typecss').href = './css/mobie_main.css';deleteElement('WarnScreen_tmpMsg');");
		} else {
			changePageType("auto");
		}
	}

	// 檢查Cookie，以判斷是否顯示warnscreen。
	if (getCookie("IsReadWarn") == "ture") {
		hide("warnscreen_bg");
	} else if (getCookie("IsReadWarn") == "false") {
		show("warnscreen_bg");
	} else {
		setCookie("IsReadWarn","false");
		show("warnscreen_bg");
	}

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
		// 判斷系統/瀏覽器配色主題，設定與之相應的css和img。
		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			document.getElementById("dpmodeswichimg").attributes[3].value = "./images/sun.svg";
			document.getElementById("centercss").attributes.href.value = "./css/full_light.css";
			// light模式。
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.getElementById("dpmodeswichimg").attributes[3].value = "./images/moon.svg";
			document.getElementById("centercss").attributes.href.value = "./css/full_night.css";
			// night模式。
		} else {
			document.getElementById("dpmodeswichimg").attributes[3].value = "./images/sun.svg";
			document.getElementById("centercss").attributes.href.value = "./css/full_light.css";
			// 如果沒有定義(或值異常)displayMode，則設定為默認light模式。
		}
	}
}

