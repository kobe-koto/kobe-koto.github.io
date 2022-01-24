// Encoding: UTF-8
// Made with heart by kobe-koto in AGPL-3.0 License License
// copyright 2021 kobe-koto


function setCookie (name,value) {
	var days = 1; //定义一天
	var exp = new Date();
	exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
	// 写入Cookie, toGMTString将时间转换成字符串
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString;
}


function getCookie (name) {
	var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //匹配字段
	if (arr = document.cookie.match(reg)) {
		return unescape(arr[2]);
	} else {
		return null;
	}
}

function Get (ElementID) {
	document.getElementById(ElementID).innerHTML;
	console.log("use 'ListID();' to see IDs.");
}

function Replace (ElementID,Value) {
	document.getElementById(ElementID).innerHTML = Value;
	console.log("use 'ListID();' to see IDs.");
}

function ListID () {
	console.log(UserName + "!There are ElementIDs can change with you!");
	console.log("times\r\nexam-no\r\nexam-name\r\nexam-type\r\nquestion\r\nchoose-A\r\nchoose-B\r\nchoose-C\r\nchoose-D");
}

function SetUserName (Name) {
	setCookie("UserName",Name);
	UserName = Name;
	console.log("THX," + UserName);
}
window.onload=function windowLoad () {
	if (!getCookie("UserName") == "null") {
		UserName = getCookie("UserName");
	} else {
		UserName = "undefined";
	}
	console.log("Hey " + UserName + "");
	console.log("Usage for 2class·SP:");
	console.log("to list IDs, shell \"ListID();\"");
	console.log("to read Element by IDs, shell \"Get(id);\"");
	console.log("to change Element by IDs, shell \"Replace(id,value);\"");
	console.log("to set UserName, shell \"SetUserName(Name);\"");
	console.log("to see the these things again, shell \"windowLoad();\"");
}