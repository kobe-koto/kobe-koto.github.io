// Encoding: UTF-8
// Made with heart by kobe-koto in AGPL-3.0 License License
// copyright 2021 kobe-koto


// cookie中存值
function setCookie (name,value) {
	if (value) {
		var days = 1; //定义一天
		var exp = new Date();
		exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
		// 写入Cookie, toGMTString将时间转换成字符串
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString;
	}
	// console.log ("Cookie-set " + name + " = " + value);
};

// cookie中取值
function getCookie (name) {
	var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //匹配字段
	if (arr = document.cookie.match(reg)) {
		return unescape(arr[2]);
	} else {
		return null;
	}
	// console.log ("Cookie-get " + name);
};

function class2_get (ElementID) {
	document.getElementById(ElementID).innerHTML;
	console.log("use 'class2_ListID();' to see IDs.");
};

function class2_replace (ElementID,Value) {
	document.getElementById(ElementID).innerHTML = Value;
	console.log("use 'class2_ListID();' to see IDs.");
};

function class2_ListID () {
	console.log("dude!There are some ElementIDs!");
	console.log("times\r\nexam-no\r\nexam-name\r\nexam-type\r\nquestion\r\nchoose-A\r\nchoose-B\r\nchoose-C\r\nchoose-D");
};

function SetUserName (Name) {
	var UserName_isset = "ture";
	var UserName = Name;
	console.log("THX," + UserName);
	setCookie("UserName_isset","ture");
	setCookie("UserName",Name);
};

// setCookie("UserName","dude");
var UserName_isset = getCookie("UserName_isset");
if (UserName_isset = "ture") {
	var UserName = getCookie("UserName");
} else {
	var UserName = "dude";
};
console.log("Hey " + UserName + "");
console.log("Usage: \r\nclass2_replace(id,value); \r\nclass2_get(id); \r\nclass2_ListID();");
console.log("...can I call you else?(just do 'SetUserName(Name);')");