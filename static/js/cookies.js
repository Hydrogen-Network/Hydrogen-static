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
}

async function cookieconsent() {
        let cookiestorage = localStorage.getItem('cookiesaccepted');
        if(cookiestorage === 'false') {
                let cookiEl = document.createElement('div');
                cookiEl.id = "cookieNotice";
                cookiEl.class = "light display-right";
                cookiEl.style = "display: block;";
                cookiEl.innerHTML = '<div id="closeIcon" style="display: none;"></div><div class="title-wrap"><h4>Cookie Consent</h4></div><div class="content-wrap"><div class="msg-wrap"><p>We use cookies! This website uses cookies or similar technologies to enhance your browsing experience and provide personalized recommendations. By continuing to use our website, you agree to our <a style="color: grey;" href="cookieconsentpolicy.html">Cookie Policy</a></p><div class="btn-wrap"><button class="popupbutton" onclick="acceptCookieConsent();">Accept</button></div></div></div>';
        } else {

        }
}
cookieconsent();
