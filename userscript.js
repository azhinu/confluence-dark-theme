// ==UserScript==
// @name         Confluence Dark CSS
// @namespace    https://github.com/azhinu/
// @homepageURL  https://github.com/azhinu/confluence-dark-theme/
// @license      WTFPL
// @version      0.1
// @description  UserScript that imort dark CSS for Confluence
// @author       Azhinu
// @match
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    @import "https://raw.githubusercontent.com/azhinu/confluence-dark-theme/master/confluence-dark-min.css";
` );
