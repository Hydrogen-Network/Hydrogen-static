"use strict";
var params = new URLSearchParams(window.location.search)
console.log("Searching for " + params.get("q"))
/*
if(params.get("q")) {
  	//var iframe = document.getElementById('frame');
  	var iframe = document.createElement('iframe');
    iframe.style.diplay = '';
    iframe.src = __uv$config.prefix + __uv$config.encodeUrl(search(params.get("q")));
}
*/
  
function search(input) {
  const searchEngine = localStorage.getItem('searchEngine');
  const template = searchEngine || 'https://search.braveS.com/search?q=%s';

  try {
    return new URL(input).toString();
  } catch (err) {
  }

  try {
    const url = new URL(`http://${input}`);
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
  }
  return template.replace("%s", encodeURIComponent(input));
}
