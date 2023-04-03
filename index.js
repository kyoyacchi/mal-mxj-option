// ==UserScript==
// @name         Add "MxJ" option to dropdown menu - MAL
// @namespace    https://myanimelist.net/profile/kyoyatempest
// @version      1.2
// @description  Adds "MxJ" option to MAL's dropdown menu. (for mobile and desktop)
// @author       kyoyacchi
// @match        https://myanimelist.net/*
// @grant        none
// @run-at       document-end
// @license      MIT
// ==/UserScript==
 
(function() {
    'use strict';
 
 
  const option = document.createElement('li');
option.classList.add('link');
const optionLink = document.createElement('a');
optionLink.href = 'https://mxj.myanimelist.net/about-me/';
const optionIcon = document.createElement('i');
optionIcon.classList.add('fas', 'fa-table-list');
optionLink.appendChild(optionIcon);
optionLink.appendChild(document.createTextNode('  MxJ Settings'));
option.appendChild(optionLink);
const mdropdown = document.querySelector('.menu-list');
const ddropdown = document.querySelector('.arrow_box.header-profile-dropdown.header-menu-dropdown > ul');
  if (mdropdown){
 
 
mdropdown.appendChild(option)
  } else if (ddropdown){
 
 
 
const option1 = document.createElement('li');
const optionLink1 = document.createElement('a');
optionLink1.href = 'https://mxj.myanimelist.net/about-me/';
const optionIcon1 = document.createElement('i');
optionIcon1.classList.add('fas', 'fa-table-list');
const optionText1 = document.createTextNode(' MxJ Settings');
optionLink1.appendChild(optionIcon1);
optionLink1.appendChild(optionText1);
option1.appendChild(optionLink1);
const ddropdown = document.querySelector('.arrow_box.header-profile-dropdown.header-menu-dropdown > ul');
const bookshelf = Array.from(ddropdown.children).find((child) => child.textContent.trim() === 'Bookshelf');
 
if (!bookshelf) {
 
}
ddropdown.insertBefore(option1, bookshelf.nextSibling);
 
  }
 
})();
