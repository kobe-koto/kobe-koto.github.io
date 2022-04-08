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



{"code":"200","msg":"OK",type:"fur",url:"https:\/\/floral-disk-7293.h123hh.workers.dev\/img-original\/img\/2019\/12\/31\/20\/36\/09\/78611242_p0.jpg"}




addEventListener("fetch", event => {
	event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
	//return new Response("Hello world")
	fetch('https://koto.cc/webpage/GetSexyImg/database/fur.txt')
		.then(response => response.json())
		.then(ColorImgJson => {
			var url = ("https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/fur/" + ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name).toString();
			var type = 'fur';
			return new Response("{\"code\":\"200\",\"msg\":\"OK\",type:\""+type+"\",url:\""+url+"\"}");
			console.log("{\"code\":\"200\",\"msg\":\"OK\",type:\""+type+"\",url:\""+url+"\"}");
		})
}

addEventListener("fetch", function (event) {
	event.respondWith(

		fetch('https://koto.cc/webpage/GetSexyImg/database/fur.txt')
			.then(response => response.json())
			.then(ColorImgJson => {
				while (true) {
					const name = ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name;
					if (name != "LetMeFixThisErrorButDoNotThinkSoItIsWorkGood?.jpg") {
						const url = "https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/fur/" + name;
						const type = 'fur';
						const count = ColorImgJson.fileNum;
						const returnData = "{\"code\":\"200\",\"msg\":\"OK\",\"type\":\""+type+"\",\"count\":\""+count+"\",\"name\":\""+name+"\",\"url\":\""+url+"\"}";
						return new Response(returnData);
					}
				}
			})

	)
})

addEventListener('fetch', event => {
	return event.respondWith(
		fetch('https://koto.cc/webpage/GetSexyImg/database/fur.txt')
			.then(response => response.json())
			.then(ColorImgJson => {
				while (true) {
					const name = ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name;
					if (name != "LetMeFixThisErrorButDoNotThinkSoItIsWorkGood?.jpg") {
						const url = "https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/fur/" + name;
						const type = 'fur';
						const count = ColorImgJson.fileNum;
						const returnData = "{\"code\":\"200\",\"msg\":\"OK\",\"type\":\""+type+"\",\"count\":\""+count+"\",\"name\":\""+name+"\",\"url\":\""+url+"\"}";
						//return new Response(returnData);
						return new Response(returnData, {
							headers: {
								'content-type': 'application/json;charset=UTF-8',
								'Access-Control-Allow-Origin': '*',
							},
						})
					}
				}
			})
	)
});





fetch('https://koto.cc/webpage/GetSexyImg/database/fur.txt')
	.then(response => response.json())
	.then(ColorImgJson => {
		while (true) {
			const name = ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name;
			if (name != "LetMeFixThisErrorButDoNotThinkSoItIsWorkGood?.jpg") {
				const url = "https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/fur/" + name;
				const type = 'fur';
				const count = ColorImgJson.fileNum;
				const returnData = "{\"code\":\"200\",\"msg\":\"OK\",\"type\":\""+type+"\",\"count\":\""+count+"\",\"name\":\""+name+"\",\"url\":\""+url+"\"}";
				return new Response(returnData);
			}
		}
	})


























const type = "fur";
const originatorAPI = "https://drive-koto.vercel.app/api/raw/?path=/Image/GetColorImg/";

addEventListener('fetch', event => {
	return event.respondWith(
		fetch("https://koto.cc/webpage/GetSexyImg/database/"+type+".txt")
			.then(response => response.json())
			.then(ColorImgJson => {
				while (true) {
					const name = ColorImgJson.pics[(Math.round((ColorImgJson.fileNum - 1) * Math.random()))].name;
					if (name != "LetMeFixThisErrorButDoNotThinkSoItIsWorkGood?.jpg") {
						const url = originatorAPI+type+"/" + name;
						const count = ColorImgJson.fileNum;
						const returnData = "{\"code\":\"200\",\"msg\":\"OK\",\"type\":\""+type+"\",\"count\":\""+count+"\",\"name\":\""+name+"\",\"url\":\""+url+"\"}";
						//return new Response(returnData);
						return new Response(returnData, {
							headers: {
								'content-type': 'application/json;charset=UTF-8',
								'Access-Control-Allow-Origin': '*',
							},
						})
					}
				}
			})
	)
});






