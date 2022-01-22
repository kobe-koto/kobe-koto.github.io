// Encoding: UTF-8
// Made with heart by kobe-koto in AGPL-3.0 License License
// copyright 2021 kobe-koto

function createElement (element,info,root,className) {
	var element_root = document.createElement(element);
	var element_info = document.createTextNode(info);
	element_root.appendChild(element_info);
	element_root.className = className;
	document.getElementById(root).appendChild(element_root);
}
function delateElement (elementId) {
	document.getElementById(elementId).style.display = 'none';// for IE
	document.getElementById(elementId).remove()// full del
}
function noallowEnter (events,clickElement) {
	var et = events || window.event;
	var keycode = et.charCode || et.keyCode;
	if (keycode == 13) {
		document.getElementById(clickElement).click();
		if (window.event) {
			window.event.returnValue = false;
		} else {
			events.preventDefault();
			// firefox
		}
	}
}
function formattedDate() {
	var originalDate = new Date();
	var formattedDate = '';
	formattedDate += originalDate.getFullYear() + '年 '; //获取当前年份 
	formattedDate += originalDate.getMonth() + 1 + '月 '; //获取当前月份（0——11） 
	formattedDate += originalDate.getDate() + '日 ';
	formattedDate += originalDate.getHours() + '时 ';
	formattedDate += originalDate.getMinutes() + '分 ';
	formattedDate += originalDate.getSeconds() + '秒';
	return formattedDate;
}
function logOutput(type,info,putTo,element) {
	createElement(element,"[" + type + " | " + formattedDate() + "] " + info,putTo,"");
	console.log("[" + type + " | " + formattedDate() + "]" + info);
}
function rePutInt() {
	document.getElementById("loadword").innerHTML = "";
	document.getElementById("intdp").innerHTML = "";
}
function rrddnnoo (intmin,intmax) {
	// document.getElementById("intwindow").value;
	logOutput("INFO","ProgramStart","logzone","h4");
	errorTime = "";
	rePutInt();

	logOutput("STEP","确定给定的值是否为被特别指定的字符串","logzone","p");

	// console.log("[step] determines if the given value is a special string.");
	
	if (intmax.match(/(114514|1919810)/i) || intmin.match(/(114514|1919810)/i)){
		document.getElementById("intdp").innerHTML = "😱";
		document.getElementById("intword").innerHTML = "臭死了";

		document.getElementById("loadword").innerHTML = "That an Easter Egg.";

		logOutput("--INFO","An Easter egg has been found!","logzone","p");
		return null;
	}
	if (intmax.match(/(kobe|koto)/i) || intmin.match(/(kobe|koto)/i)) {
		document.getElementById("intdp").innerHTML = "🧐";
		document.getElementById("intword").innerHTML = "不要质疑kobe koto.";

		document.getElementById("loadword").innerHTML = "That an Easter Egg.";

		logOutput("--INFO","An Easter egg has been found!","logzone","p");
		return null;
	}

	logOutput("--INFO","沒有找到特别指定的字符串","logzone","p");

	logOutput("STEP","确定给定的值是否正确","logzone","p");

	if (intmin === "" || intmin === "null") {
		rePutInt();

		document.getElementById('intminwindow').value = "0";
		intmin = "0";
		errorTime = "1";

		logOutput("--INFO","intmin 未被定义 或 被定义为为\"null\"，将重置为 0","logzone","p");
	}
	if (intmax === "" || intmax === "null") {
		rePutInt();

		document.getElementById('intmaxwindow').value = "50";
		intmax = "50";
		errorTime = "1";

		logOutput("--INFO","intmax 未被定义 或 被定义为为\"null\"，将重置为 50","logzone","p");
	}
	if (intmax == "0") {
		rePutInt();

		document.getElementById('intmaxwindow').value = "50";
		intmax = "50";
		errorTime = "1";

		logOutput("--INFO","intmax 不可为0，將重设至50","logzone","p");
	}
			
	//ERROR area ↓
	if(isNaN(intmax) || isNaN(intmin)){
		document.getElementById("loadword").innerHTML = "Error.";
		document.getElementById("intdp").innerHTML = "";
		document.getElementById("intword").innerHTML = "[Error] Not a number";

		logOutput("ERROR","Not a number","logzone","p");
		return null;
	}
	if (!intmax.match(/(-)/i) && intmax < intmin) {
		document.getElementById("loadword").innerHTML = "Error.";
		document.getElementById("intdp").innerHTML = "";
		document.getElementById("intword").innerHTML = "[Error] intmax 不可小于 intmin。";

		logOutput("ERROR","當intmax為正數時，intmax 不可小于 intmin。","logzone","p");
		return null;
	}
	if (intmax.match(/(-)/i) && intmax > intmin) {
		document.getElementById("loadword").innerHTML = "Error.";
		document.getElementById("intdp").innerHTML = "";
		document.getElementById("intword").innerHTML = "[Error] intmax 不可小于 intmin。";

		logOutput("ERROR","當intmax為負數時，intmax 不可大於 intmin。","logzone","p");
		return null;
	}
	//ERROR area ↑

	if (errorTime == "1") {
		errorTime = "";
		// intmax = "50";
		// intmin = "0";
		logOutput("--INFO","檢測到遺留下的錯誤訊息。將會確實重新運行程式。","logzone","h5");
		rrddnnoo(intmin,intmax);
	}

	logOutput("--INFO","沒有發現影響程式運作的致命問題","logzone","p");

	logOutput("--INFO","正在生成random数","logzone","p");
			
	while (!isNaN(intmax) && !isNaN(intmin) && !errorTime == "1" && !intmax.match(/(-)/i)) {
		var randomno = Math.round(intmax * Math.random());
		if (randomno <= intmax && randomno >= intmin) {
			document.getElementById("intword").innerHTML = "no. ";
			document.getElementById("intdp").innerHTML = randomno.toString();

			document.getElementById("loadword").innerHTML = "Success.";

			logOutput("--INFO", "Success,num is " + randomno, "numzone", "h5");
			logOutput("--INFO", "Success,num is " + randomno, "logzone", "h5");

			return randomno;
		}
	}
	while (!isNaN(intmax) && !isNaN(intmin) && !errorTime == "1" && intmax.match(/(-)/i)) {
		var randomno = Math.round(intmax * Math.random());
		if (randomno >= intmax && randomno <= intmin && intmax.match(/(-)/i)) {
			document.getElementById("intword").innerHTML = "no. ";
			document.getElementById("intdp").innerHTML = randomno.toString();

			document.getElementById("loadword").innerHTML = "Success.";

			logOutput("--INFO","Success,num is " + randomno,"numzone","h5");
			logOutput("--INFO","Success,num is " + randomno,"logzone","h5");

			return randomno;
		}
	}
			
	document.getElementById("intword").innerHTML = "你好,\<br\/\>这是个未知错误，按照正确使用方式来讲，你应该不会看到这个东西<br\/\>请将 intmin 和 intmax 的值记录下来并提交issues.";
}
