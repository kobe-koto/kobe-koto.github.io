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
	console.log ("Cookie-set " + name + " = " + value);
};

// cookie中取值
function getCookie(name) {
	var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //匹配字段
	if (arr = document.cookie.match(reg)) {
		return unescape(arr[2]);
	} else {
		return null;
	}
	console.log ("Cookie-get " + name);
};

// 清除指定cookie值
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = setCookie(name);
	if (cval && cval != null) {
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
	}
	console.log ("Cookie-del " + name);
};

// 清除全部cookie值
// 注意：清除cookie的时候，需要同时删除path和domain，否则会出现cookie没有被清除的情况出现。
function clearCookie() {
	var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
	if (keys) {
		for (var i = keys.length; i--;) {
			// document.cookie = keys[i] +'=0;expires=' + new Date( 0).toUTCString()
			document.cookie = keys[i] +'=0;expires=' + new Date( 0).toUTCString() + ";path=/video_learning" + ";domain=localhost";
		}
	}
	console.log ("Cookie-clear ALL");
};

// cookie中存值(存放多长时间)
function setTimeCookie(name,value,expiredays) {
	if (value) {
		var days = 1; //定义一天
		var exp = new Date();
		exp.setTime(exp.getTime() + expiredays);
		// 写入Cookie, toGMTString将时间转换成字符串
		document.cookie = name + "=" + escape(value) + ((expiredays==null) ? "" : ";expires=" + exp.toGMTString()) + ";path=/" + ";domain=localhost";
	}
	console.log ("Cookie-set " + name + value + "expiretimes "+ expiredays);
};

// cookie中获取域名
function GetCookieDomain() {
	var host = location.hostname;
	var ip = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
	if (ip.test(host) === true || host === 'localhost') return host;
		var regex = /([^]*).*/;
		var match = host.match(regex);
		if (typeof match !== "undefined" && null !== match) host = match[1];
		if (typeof host !== "undefined" && null !== host) {
			var strAry = host.split(".");
			if (strAry.length > 1) {
			host = strAry[strAry.length - 2] + "." + strAry[strAry.length - 1];
		}
	}
	return '.' + host;
	console.log ("Cookie-getDomain " + name + '.' + host);
}
