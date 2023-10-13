	document.onkeydown = (e) => {
		if (e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
			switch (e.key) {
				case "q":
					e.preventDefault();
					e.stopPropagation();
					window.location.replace("https://classroom.google.com/");
					break;
				case "h":
					e.preventDefault();
					e.stopPropagation();
					if (document.title === "Hydrogen Hub") {
						document.title = "Google";
						document.querySelector("link[rel*='icon']").href = "https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_128dp.png";
					} else {
						document.title = "WhiteSpider";
						document.querySelector("link[rel*='icon']").href = "/static/gas.png";
					}
				default:
					break;
			}
		}
	};
