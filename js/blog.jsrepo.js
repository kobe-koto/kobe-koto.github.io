// Encoding: UTF-8
// Made with heart by kobe-koto in AGPL-3.0 License License
// copyright 2021 kobe-koto

function show(ElementID) {
	document.getElementById(ElementID).style.display = "unset";
	console.log("Show Element ID = " + ElementID);
};
function hide(ElementID) {
	document.getElementById(ElementID).style.display = "none";
	console.log("Hide Element ID = " + ElementID);
};

function windowload () {
    document.getElementById("uicon").attributes[3].value = "./images/icon.png";
    document.getElementById("uid").innerHTML = "kobe koto";
    document.getElementById("uinfo").innerHTML = "rks14.58|全网最拉";
};