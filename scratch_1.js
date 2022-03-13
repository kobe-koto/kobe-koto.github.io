/* Encoding: UTF-8
* Made with heart by kobe-koto in AGPL-3.0 License License
* copyright 2021 kobe-koto */

addEventListener("fetch", function (event) {
	event.respondWith(

		fetch('./assets/other/ColorImg.txt')
			.then(response => response.json())
			.then(ColorImgJson => {
				return Response.redirect(("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301);
				//console.log(("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301);
			})

	)
});




/*
*
* fetch('https://localhost:63342/kobe-koto.github.io/assets/other/ColorImg.txt')
* 	.then(response => response.json())
* 	.then(GetColorImgJson => {
*
* 		const TmpResponse2 = data.clone();
* 		var GetColorImgJson = TmpResponse2.blob();
*
* 		if (GetColorImgJson.slice(-4).toString().match(/(},)/i)) {
* 			ColorImgJson = JSON.parse(GetColorImgJson.slice(0,-3) + "]}");
* 		} else if (GetColorImgJson.slice(-5).toString().match(/(},)/i)) {
* 			ColorImgJson = JSON.parse(GetColorImgJson.slice(0,-4) + "]}");
* 		} else if (GetColorImgJson.slice(-6).toString().match(/(},)/i)) {
* 			ColorImgJson = JSON.parse(GetColorImgJson.slice(0,-5) + "]}");
* 		} else {
* 			ColorImgJson = JSON.parse(GetColorImgJson);
* 		}
* 		console.log(ColorImgJson);
* 		return Response.redirect((GetImgAPI + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301);
*
* 	});
*
*/

//handleRequest(event.request);





