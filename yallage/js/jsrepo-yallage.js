// Encoding: UTF-8
// Made with heart by kobe-koto in AGPL-3.0 License License
// copyright 2021 kobe-koto

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
};

function hwscreen() {
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
};

function dpmodeswich(){
	// 定義dpmode的值。
	var dpmode = document.getElementById("centercss").attributes.href.value;
	// dpmode是否爲night或light，切換為與之相反的東西。
	if (dpmode == "./css/full_night.css") { 
		// to light
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/sun.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_light.css";
		setCookie("display-mode","light");
		console.log ("sun: to light");
	} else if (dpmode == "./css/full_light.css") {
		// to night
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/moon.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_night.css";
		setCookie("display-mode","night");
		console.log ("moon: to night");
	} else {
		console.log ("what?");
		// 爲什麽會這樣呢（）
	};
};

window.onload=function(){
	var isreaded = getCookie("IsReadWarn");
	if (isreaded == "ture") {
		hide("warnscreen_bg");
	} else if (isreaded == "false") {} else {
		setCookie("IsReadWarn","false");
	};

	// 判斷Cookie中displayMode為何，設定與之相應的css和img。↓
	var displaymode = getCookie("display-mode");
	if (displaymode == "light") {
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/sun.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_light.css";
		// light模式。
	} else if (displaymode == "night") {
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/moon.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_night.css";
		// night模式。
	} else {
		document.getElementById("dpmodeswichimg").attributes[3].value = "./images/sun.svg";
		document.getElementById("centercss").attributes.href.value = "./css/full_light.css";
		setCookie("display-mode","light");
		// 如果沒有定義(或值異常)displayMode，則設定為默認light模式 + 重置cookie。
	};
};;
};