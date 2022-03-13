/* Encoding: UTF-8
* Made with heart by kobe-koto in AGPL-3.0 License License
* copyright 2021 kobe-koto */

addEventListener("fetch", function (event) {
	event.respondWith(
		fetch('https://koto.eu.org/assets/other/ColorImg.txt')
			.then(response => response.json())
			.then(ColorImgJson => {
				return Response.redirect(("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301);
				/* console.log(("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301); */
			})
	)
});



//co-cache!test.

addEventListener('fetch', event => {
	event.respondWith(
			fetch('https://koto.eu.org/assets/other/ColorImg.txt')
				.then(response => response.json())
				.then(ColorImgJson => {
					async function redirectImgURL (ColorImgJson) {
						const response = await fetch(request);

						// Clone the response so that it's no longer immutable
						const newResponse = new Response(response.body, response);

						// Add a custom header with a value
						newResponse.headers.append('x-workers-hello', 'Hello from Cloudflare Workers');

						// Delete headers
						newResponse.headers.delete('x-header-to-delete');
						newResponse.headers.delete('x-header2-to-delete');

						// Adjust the value for an existing header
						newResponse.headers.set('x-header-to-change', 'NewValue');
						newResponse.redirect(("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301);

						return newResponse;
					}
					redirectImgURL(ColorImgJson)
						.then(Response => {
							return Response;
						})
				})
	)
})





addEventListener("fetch", function (event) {
	console.log(event);
	event.respondWith(
		fetch('https://koto.eu.org/assets/other/ColorImg.txt')
			.then(response => response.json())
			.then(ColorImgJson => {
				var ImgURL = ("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString();
				event.body.headers.append('Cache-Control', 'no-store');
				return event.body.redirect(ImgURL, 301);
				/* console.log(("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301); */
			})
	)
});

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	fetch('https://koto.eu.org/assets/other/ColorImg.txt')
		.then(response => response.json())
		.then(ColorImgJson => {
			var ImgURL = ("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString();
			Response.headers.append('Cache-Control', 'no-store');
			return Response.redirect(ImgURL, 301);
			/* console.log(("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301); */
		})
	//return newResponse;
}


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





