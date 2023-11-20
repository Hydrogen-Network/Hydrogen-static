// Create cookie
function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
	const d = new Date();
	d.setTime(d.getTime() + (24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

function acceptCookieConsent() {
	localStorage.setItem('cookiesaccepted', 'true');
	document.getElementById('cookieNotice').style.display = "none";
}

function IgnoreCookieConsent() {
	localStorage.setItem('cookiesaccepted', 'ignore');
	document.getElementById('cookieNotice').style.display = "none";
}

async function cookieconsent() {
        if(localStorage.getItem('cookiesaccepted') === null || localStorage.getItem('cookiesaccepted') === 'false') {
		document.getElementById('cookieNotice').style.display = "block";
	} else {
		document.getElementById('cookieNotice').style.display = "none";
        }
}

cookieconsent();
