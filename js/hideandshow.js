// Encoding: UTF-8
// Made with heart by kobe-koto in AGPL-3.0 License License
// Copyright 2021 kobe-koto
function show(ElementID) {
	document.getElementById(ElementID).style.display = "unset";
	console.log("Show Element ID = " + ElementID)
}
function hide(ElementID) {
	document.getElementById(ElementID).style.display = "none";
	console.log("Hide Element ID = " + ElementID)
}
