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
  if (url.value.startsWith("javascript:") || url.value.startsWith("data:") || url.value.startsWith("vbscript:")) {
    
  } else {
    if(localStorage.getItem('proxyOption') == 'dy') {
      frame.src = '/service/dynamic/' + url;
    } else if(localStorage.getItem('proxyOption') == 'aero') {
      frame.src = '/service/aero/' + url;
    } else {
      frame.src = "/service/" + url;
    }
  }
});

