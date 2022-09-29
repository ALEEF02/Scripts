// ==UserScript==
// @name         Widen Bar
// @namespace    https://aleef.dev
// @version      1.1
// @description  Widens the input bar on WolframAlpha to allow for easier viewing of complex equations
// @author       ALEEF02
// @match        https://www.wolframalpha.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wolframalpha.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var bar = document.getElementsByClassName("_2Ejx")[0];
    function widenBar(why) {
        console.log("From " + why + ", widening bar...");
        try {
			document.getElementsByClassName("_2Ejx")[0].style.maxWidth = "95%";
		} catch (e) {
			console.warn("Unable to widen the bar! - " + e);
		}
    }
    widenBar("initial");
    bar.addEventListener('load', function (event) {
        widenBar("bar load");
    });
    bar.addEventListener('visibilitychange', function (event) {
        widenBar("bar vis");
    });
    window.addEventListener('DOMContentLoaded', function (event) {
        widenBar("DOM load");
    });

    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            widenBar("location change");
        }
    }).observe(document, {subtree: true, childList: true});
})();