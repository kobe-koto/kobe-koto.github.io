
function BearCode(a, d, c) {
	isDecode = "Decode" == d ? !0 : !1;
	var b = document.getElementById("bear"),
		e = document.getElementById("pw");
	switch (a) {
	case "BASE64":
		isDecode ? (b.value = decodeURIComponent(escape(window.atob(c.replace(/^\s+|\s+$/g, "")))), cleanTextAreaHeight(b)) : (e.value = window.btoa(unescape(encodeURIComponent(c))), cleanTextAreaHeight(e));
		return;
	case "MD5":
		isDecode || (e.value = CryptoJS.MD5(c), cleanTextAreaHeight(e));
		return;
	case "SHA1":
		isDecode || (e.value = CryptoJS.SHA1(c), cleanTextAreaHeight(e));
		return;
	case "SHA256":
		isDecode ||
			(e.value = CryptoJS.SHA256(c), cleanTextAreaHeight(e));
		return;
	case "SHA512":
		isDecode || (e.value = CryptoJS.SHA512(c), cleanTextAreaHeight(e));
		return
	}
	if (500 > (new Date).getTime() - timeStamp) return !1;
	timeStamp = (new Date).getTime();
	var h = getKey([0, 7, 12, 9, 7, 11, 11, 6, 4, 4, 15, 8]);
	var f = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
	f.open("POST", "bear.php", !0);
	f.onreadystatechange = function () {
		if (4 == f.readyState)
			if (200 == f.status) isDecode ? (b.value = f.responseText, cleanTextAreaHeight(b)) :
				(e.value = f.responseText, cleanTextAreaHeight(e));
			else {
				var g = f.status + " \u7f51\u7edc\u5f02\u5e38\u8bf7\u7a0d\u540e\u8bbf\u95ee";
				isDecode ? (b.value = g, cleanTextAreaHeight(b)) : (e.value = g, cleanTextAreaHeight(e))
			}
	};
	f.timeout = 5E3;
	f.ontimeout = function (g) {
		console.error("Timeout" + timeStamp)
	};
	f.setRequestHeader("X-Token", h);
	f.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	f.send("mode=" + encodeURIComponent(a) + "&code=" + encodeURIComponent(d) +
		"&txt=" + encodeURIComponent(c))
}
