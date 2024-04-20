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
const searchEngine = 'https://google.com/search?q=%s';
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
    frame.src = '/a/q/' + __uv$config.encodeUrl(url)
  } else {
    frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
  }
});

