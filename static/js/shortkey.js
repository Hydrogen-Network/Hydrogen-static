	document.onkeydown = (e) => {
		if (e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
			switch (e.key) {
				case "q":
					e.preventDefault();
					e.stopPropagation();
					window.location.replace("https://classroom.google.com/");
					break;
				case "e":
					e.preventDefault();
					e.stopPropagation();
					const a = document.URL.substr(0,document.URL.lastIndexOf('/'))
					const aone = "https://github.com/Hydrogen-Network/Hydrogen/edit/main/" + a;
					aone.replace('https://brrrrrr.pages.dev/', '');
					const atwo = open(aone);
					break;
				case "h":
					e.preventDefault();
					e.stopPropagation();
					if (document.title === "Hydrogen") {
						document.title = "Google";
						document.querySelector("link[rel*='icon']").href = "https://raw.githubusercontent.com/whitespider-dev/whitespider/Main/res/google.ico";
					} else {
						document.title = "Hydrogen";
						document.querySelector("link[rel*='icon']").href = "/static/img/gas.png";
					}
				default:
					break;
			}
		}
	};
