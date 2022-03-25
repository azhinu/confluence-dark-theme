// ==UserScript==
// @name         Confluence Dark CSS
// @namespace    https://github.com/azhinu/
// @homepageURL  https://github.com/azhinu/confluence-dark-theme/
// @license      WTFPL
// @version      0.2
// @description  UserScript that imort dark CSS for Confluence
// @author       Azhinu
// @match        https://confluence.localhost/*
// @resource     IMPORTED_CSS https://raw.githubusercontent.com/azhinu/confluence-dark-theme/master/confluence-dark-min.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

'use strict';
GM_addStyle(GM_getResourceText("IMPORTED_CSS"));
