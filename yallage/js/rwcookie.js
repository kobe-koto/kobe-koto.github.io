// Encoding: UTF-8

function writecookie(name,value) {
	document.cookie = name=value;
}
function readcookie(name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(name + "=")
			if (c_start != -1) {
				c_start = c_start + name.length + 1
				c_end = document.cookie.indexOf(";", c_start)
			if (c_end == -1) c_end = document.cookie.length
			//document.write(document.cookie.substring(c_start,c_end)+"<br>");
			var cookies= unescape(document.cookie.substring(c_start, c_end))  // 取出值 
			alert(sss)
		}
	}
}