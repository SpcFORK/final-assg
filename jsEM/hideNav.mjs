const header = document.querySelector('header');
const sp = new URLSearchParams(location.search);
const hideNav = sp.get('hideNav');

if (hideNav) header.hidden = true