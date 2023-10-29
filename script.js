// ==UserScript==
// @name         Bypass Adblock Detection
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Bypass adblock detection
// @author       Apxthexsis
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const noop = () => {};
    const noopTrue = () => true;
    const noopFalse = () => false;
   //Killing evrything possible related to add detection
    window.addEventListener('DOMContentLoaded', () => {
        Object.defineProperties(window, {
            'adsbygoogle': {
                value: [],
                writable: false,
                configurable: false,
            },
            'canRunAds': {
                value: true,
                writable: false,
                configurable: false
            },
            'checkAdBlock': {
                value: noopTrue,
                writable: false,
                configurable: false
            },
            'adblock': {
                value: false,
                writable: false,
                configurable: false
            },
            'adblockIsActive': {
                value: noopFalse,
                writable: false,
                configurable: false
            },
        });
    });
})();
