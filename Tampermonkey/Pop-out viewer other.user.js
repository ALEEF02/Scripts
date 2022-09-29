// ==UserScript==
// @name         Pop-out viewer other
// @namespace    https://aleef.dev
// @version      1.0
// @description  Add a button to open Canvas documents in a new tab
// @author       ALEEF02
// @match        https://sit.instructure.com/courses/*/*/*
// @exclude      https://sit.instructure.com/courses/*/files/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sit.instructure.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const observer = new MutationObserver(function(mutations_list) {
        mutations_list.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(added_node) {
                if(added_node.getAttribute("aria-label") == 'File Preview Overlay') {
                    console.log('File Preview has been added');
                    console.log("Adding Button");
                    var frameSRC = added_node.childNodes[0].childNodes[0].childNodes[1].childNodes[0].src;
                    var buttonDiv = added_node.childNodes[0].childNodes[0].childNodes[0];

                    let btn = document.createElement("button");
                    btn.innerHTML = "Open in New Tab";
                    btn.onclick = function() {
                        window.open(
                            frameSRC,
                            '_blank' // <- This is what makes it open in a new window.
                        );
                    };
                    buttonDiv.appendChild(btn);
                }
            });
        });
    });

    observer.observe(document, { subtree: true, childList: true });
})();