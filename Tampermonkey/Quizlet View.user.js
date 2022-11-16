// ==UserScript==
// @name         Quizlet View
// @namespace    https://aleef.dev
// @version      1.0
// @description  Reveal the answers to textbook solutions
// @author       ALEEF02
// @match        https://quizlet.com/explanations/textbook-solutions/*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=quizlet.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	var oldHref = document.location.href;

	window.onload = function() {
		fix();
		var bodyList = document.querySelector("body");

		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (oldHref != document.location.href) {
					oldHref = document.location.href;
					fix();
				}
			});
		});

		var config = {
			childList: true,
			subtree: true
		};

		observer.observe(bodyList, config);
	};

	function fix() {
		let myElements = document.querySelectorAll(".hnqbbas");

		for (let i = 0; i < myElements.length; i++) {
			myElements[i].style.maxHeight = "100%";
		}

		let del = document.querySelectorAll(".hideBelow--s");

		for (let i = 0; i < del.length; i++) {
			del[i].remove();
		}
	}
})();