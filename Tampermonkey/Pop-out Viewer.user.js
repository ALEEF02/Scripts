// ==UserScript==
// @name         Pop-out Viewer
// @namespace    https://aleef.dev
// @version      1.0
// @description  Add a button to open Canvas files in a new tab. Avoid the shitty window-in-window
// @author       ALEEF02
// @match        https://sit.instructure.com/courses/*/files/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sit.instructure.com
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	window.addEventListener('load', function() {
		console.log("Adding Button");
		var divFrame = document.getElementById("doc_preview");
		var frameSRC = divFrame.childNodes[0].childNodes[0].src;
		var buttonDiv = divFrame.parentNode.childNodes[3];

		let btn = document.createElement("button");
		btn.innerHTML = "Open in New Tab";
		btn.onclick = function() {
			window.open(
				frameSRC,
				'_blank' // <- This is what makes it open in a new window.
			);
		};
		buttonDiv.appendChild(btn);
    });
})();