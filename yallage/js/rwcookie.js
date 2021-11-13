// Encoding: UTF-8

// cookie中存值
function setCookie(name,value) {
	if (value) {
		var days = 1; //定义一天
		var exp = new Date();
		exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
		// 写入Cookie, toGMTString将时间转换成字符串
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString;
	}
	console.log ("setcookie");
};

// cookie中取值
function getCookie(name) {
	var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //匹配字段
	if (arr = document.cookie.match(reg)) {
		return unescape(arr[2]);
	} else {
		return null;
	}
	console.log ("getcookie");
};


