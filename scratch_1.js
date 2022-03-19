/* Encoding: UTF-8
* Made with heart by kobe-koto in AGPL-3.0 License License
* copyright 2021 kobe-koto */




async function handleRequest(request) {
	const response = await fetch(request);

	// Clone the response so that it's no longer immutable
	const Response = new Response(response.body, response);

	// Add a custom header with a value
	Response.headers.append('Cache-Control', 'no-store, max-age=0');


	const url = new URL(request.url)
	if (url.pathname.slice(1) === "fur") {
		if (url.search == '') {
			fetch('https://koto.eu.org/webpage/GetSexyImg/database/fur.txt')
				.then(response => response.json())
				.then(ColorImgJson => {
					Response.redirect(("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/fur/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301);
					return Response;
					/* console.log(("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301); */
				})
		} else if (!url.search == '') {
			Response.redirect("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/fur/"+url.search.slice(1), 301);
			return Response;
		}
	} else if (url.pathname.slice(1) === "gay") {
		if (url.search == '') {
			fetch('https://koto.eu.org/webpage/GetSexyImg/database/gay.txt')
				.then(response => response.json())
				.then(ColorImgJson => {
					Response.redirect(("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/gay/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301);
					return Response;
					/* console.log(("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString(), 301); */
				})
		} else if (!url.search == '') {
			Response.redirect("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/gay/"+url.search.slice(1), 301);
			return Response;
		}
	} else {
		Response.redirect('https://koto.cc/404.html', 301);
		return Response;
	}

}

addEventListener("fetch", async function (event) {
	event.respondWith(handleRequest(event.request))
})

