"use strict";

const searchInput = document.getElementById("uv-address");
var erudaScript; 

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


async function fetchResults(searchText) {
	try {
		const response = await bare.fetch(`https://duckduckgo.com/ac/?q=${encodeURIComponent(searchText)}`);
		const data = await response.json();
		isRequestPending = false;
		if (!Array.isArray(data)) {
			console.log(`Error: Invalid response format. Expected Array (got ${typeof data})`);
			return;
		}
		const suggestions = document.getElementById("suggestions");
		suggestions.innerHTML = "";
		for(const result of (data.map(r => r.phrase))) {
			const suggestionItem = document.createElement("div");
			const suggestionLink = document.createElement("a");
			suggestionItem.classList = ["suggestions"];

			const boldText = result.includes(searchText) ? `<strong>${searchText}</strong>` : searchText;
			suggestionLink.innerHTML = result.replace(searchText, boldText);

			suggestionLink.addEventListener("click", (event) => {
				event.preventDefault();
				searchurl(result);
			});
			suggestionItem.appendChild(suggestionLink);
			suggestions.appendChild(suggestionItem);
		}
	} catch (e) {
		isRequestPending = false;
		console.error(e);
	}
}

searchInput.addEventListener("input", (event) => {
	clearTimeout(debounceTimeout);
	const searchText = event.target.value;

	debounceTimeout = setTimeout(() => {
		if (searchText.length >= 1) {
			fetchResults(searchText)
		}
		if (searchText.length < 1) {
			document.getElementById("suggestions").style.display = "none";
		} else {
			document.getElementById("suggestions").style.display = "block";
		}
	}, 100);
});



function erudaToggle() {
	var elem = document.getElementById("uv-frame");
	
	if (erudaScript) {
		elem.contentWindow.eruda.destroy(); 
		elem.removeChild(erudaScript);
		erudaScript = undefined;
	} else {
		erudaScript = document.createElement("script");
		erudaScript.src = "https://cdn.jsdelivr.net/npm/eruda";
		elem.contentDocument.body.appendChild(erudaScript);
		erudaScript.onload = function() {
			elem.contentWindow.eruda.init();
			elem.contentWindow.eruda.show();
		};
	}
}
