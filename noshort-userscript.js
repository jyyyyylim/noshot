// ==UserScript==
// @name         noshorts
// @namespace    https://www.youtube.com/
// @version      0.1
// @description  shorts ui is soy trash
// @author       j5ylim
// @grant        none
// @include      *://www.youtube.com/shorts/*
// @run-at       document-start
// ==/UserScript==


(function() {
    'use strict';
    let url = new URL(window.location.href);

    url.searchParams.append("v", url.pathname.substring(url.pathname.lastIndexOf('/')+1));
    url.pathname = "watch"; window.location.replace(url);
})();
