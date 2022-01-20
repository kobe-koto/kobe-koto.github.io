// Encoding: UTF-8
// Made with heart by kobe-koto in AGPL-3.0 License License
// copyright 2021 kobe-koto// JavaScript Document

function createElement (element,info,root) {
	var element_root = document.createElement(element);
	var element_info = document.createTextNode(info);
	element_root.appendChild(element_info);
	document.getElementById(root).appendChild(element_root);
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
		};
	};
};
function formattedDate() {
	var originalDate = new Date(),
		formattedDate = '';
	formattedDate += originalDate.getFullYear() + '年 '; //获取当前年份 
	formattedDate += originalDate.getMonth() + 1 + '月 '; //获取当前月份（0——11） 
	formattedDate += originalDate.getDate() + '日 ';
	formattedDate += originalDate.getHours() + '时 ';
	formattedDate += originalDate.getMinutes() + '分 ';
	formattedDate += originalDate.getSeconds() + '秒 ';
	return formattedDate;
};
function rrddnnoo (intmin,intmax) {
	// document.getElementById("intwindow").value;
	console.log("[START]" + formattedDate());
	createElement("h4","[START]" + formattedDate(),"logzone"&&"numzone");
	
	document.getElementById("loadword").innerHTML = "确定给定的值是否为被特别指定的字符串";
	console.log("[step] determines if the given value is a special string.");
	createElement("p","[step] determines if the given value is a special string.","logzone");
	
	if (intmax.match(/(114514|1919810)/i) || intmin.match(/(114514|1919810)/i)){
		document.getElementById("loadword").innerHTML = "That an Easter Egg.";
		console.log("-------[info] An Easter egg has been found!");
		createElement("p","-------[info] An Easter egg has been found!","logzone");
		document.getElementById("intdp").innerHTML = "😨";
		document.getElementById("intword").innerHTML = "臭死了";
		return null;
	};
	if (intmax.match(/(kobe|koto)/i) || intmin.match(/(kobe|koto)/i)) {
		document.getElementById("loadword").innerHTML = "That an Easter Egg.";
		console.log("-------[info] An Easter egg has been found!");
		createElement("p","-------[info] An Easter egg has been found!","logzone");
		document.getElementById("intdp").innerHTML = "🧐";
		document.getElementById("intword").innerHTML = "不要质疑kobe koto.";
		return null;
	};
			
	document.getElementById("loadword").innerHTML = "沒有找到特别指定的字符串";
	console.log("-------[info] No specified string found.");
	createElement("p","-------[info] No specified string found.","logzone");
			
	document.getElementById("loadword").innerHTML = "确定给定的值是否正确";
	console.log("[step] determine if the given value is correct.");
	createElement("p","[step] determine if the given value is correct.","logzone");
			
	if (intmin == "" || intmin == "null") {
		document.getElementById("intdp").innerHTML = "";
		document.getElementById("loadword").innerHTML = "[info] intmin 未被定义 或 被定义为为\"null\"，将重置为 0";
		console.log("-------[info] intmin is not defined or is defined as \"null\", will reset to 0.");
		createElement("p","-------[info] intmin is not defined or is defined as \"null\", will reset to 0.","logzone");
		document.getElementById('intminwindow').value = "0";
		var intmin = "0";
	};
	if (intmax == "" || intmax == "null") {
		document.getElementById("intdp").innerHTML = "";
		document.getElementById("intword").innerHTML = "[info] intmax 未被定义 或 被定义为为\"null\"，将重置为 50";
		console.log("-------[info] intmax is not defined or is defined as \"null\", will reset to 50.");
		createElement("p","-------[info] intmax is not defined or is defined as \"null\", will reset to 50.","logzone");
		document.getElementById('intmaxwindow').value = "50";
		var intmax = "50";
	};
	if (intmax == "0") {
		document.getElementById("loadword").innerHTML = "Error.";
		document.getElementById("intdp").innerHTML = "";
		document.getElementById("intword").innerHTML = "intmax 不可为0，重设至50";
		console.log("-------[info] maximum value cannot be 0, reset to 50.");
		createElement("p","-------[info] maximum value cannot be 0, reset to 50.","logzone");
	};
			
	//ERROR area ↓
	if(isNaN(intmax) || isNaN(intmin)){
		document.getElementById("loadword").innerHTML = "Error.";
		document.getElementById("intdp").innerHTML = "";
		document.getElementById("intword").innerHTML = "[Error] Not a number";
		console.log("-------[Error] Not a number");
		createElement("p","-------[Error] Not a number","logzone");
		return null;
	};
	if (intmax < intmin) {
		document.getElementById("intdp").innerHTML = "😒";
		document.getElementById("intword").innerHTML = "[Error] intmax 不可小于 intmin。";
		console.log("-------[Error] The maximum value cannot be less than the minimum value.");
		createElement("p","-------[Error] The maximum value cannot be less than the minimum value.","logzone");
		return null;
	};
	//ERROR area ↑
			
			
	document.getElementById("loadword").innerHTML = "正在生成random数";
	console.log("-------[info] Generating random numbers.");
	createElement("p","-------[info] Generating random numbers.","logzone");
			
	while (intmax >= -1 && intmin >= -1) {
		var randomno = Math.round(intmax * Math.random());
		if (randomno <= intmax && randomno >= intmin) {
			document.getElementById("loadword").innerHTML = "Success.";
			console.log("-------[info] Success.");
			createElement("p","-------[info] Success,num is " + randomno,"logzone"&&"numzone");
			document.getElementById("intword").innerHTML = "no. ";
			document.getElementById("intdp").innerHTML = randomno;
			return randomno;
			break;
		} else if (rdno > intmax || rdno < intmin) {
			rrddnnoo(intmin,intmax);
			continue;
		};
	};
			
	document.getElementById("intword").innerHTML = "你好,\<br\/\>这是个未知错误，按照正确使用方式来讲，你应该不会看到这个东西<br\/\>请将 intmin 和 intmax 的值记录下来并提交issues.";
};
