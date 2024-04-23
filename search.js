"use strict";
/**
 *
 * @param {string} input
 * @param {string} template
 * @returns {string}
 */
function search(input, template) {
  try {
    return new URL(input).toString();
  } catch (err) {
    
  }

  try {
    const url = new URL(`http://${input}`);
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {

  }

  return template + input;
}
