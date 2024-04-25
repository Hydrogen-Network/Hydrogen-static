"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine").value || 'https://google.com/search?q=';
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine);
  let frame = document.getElementById("uv-frame");
  frame.style.display = "block";
  
  if(localStorage.getItem('dy') == 'true') {
    frame.src = '/service/dynamic/' + url;
  } else if(localStorage.getItem('aero') == 'true') {
	e.preventDefault();

	worker().then(e=>{
		var val = document.querySelector('.dipinput').value;
		if (!val.startsWith('http')) val = 'https://' + val;
	
		location.assign(window.__DIP.config.prefix + window.__DIP.encodeURL(val));
	});

  } else {
    frame.src = "/service/uv/" + url;
});

