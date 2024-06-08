//Loads custom icons
document.addEventListener("DOMContentLoaded", function(event) {
  const icon = document.getElementById('dynamic-favicon');
  const name = document.getElementById('dynamic-title');
  var selectedValue = localStorage.getItem("selectedOption");
  if (selectedValue) {
      switch (selectedValue) {
          case 'Google':
              icon.setAttribute('href', 'assets/img/cloaks/google.png');
              name.textContent = 'Google';
              localStorage.setItem("name", "Google");
              localStorage.setItem("icon", "assets/img/cloaks/google.png");
          case 'Drive':
              icon.setAttribute('href', 'assets/img/cloaks/drive.png');
              name.textContent = 'My Drive - Google Drive';
              localStorage.setItem("name", "My Drive - Google Drive");
              localStorage.setItem("icon", "assets/img/cloaks/drive.png");
          case 'Classroom':
              icon.setAttribute('href', 'assets/img/cloaks/classroom.png');
              name.textContent = 'Classes';
              localStorage.setItem("name", "Classes");
              localStorage.setItem("icon", "assets/img/cloaks/classroom.png");
          case 'Schoology':
              icon.setAttribute('href', 'assets/img/cloaks/schoology.png');
              name.textContent = 'Home | Schoology';
              localStorage.setItem("name", "Home | Schoology");
              localStorage.setItem("icon", "assets/img/cloaks/schoology.png");
          case 'Gmail':
              icon.setAttribute('href', 'assets/img/cloaks/gmail.png');
              name.textContent = 'Gmail';
              localStorage.setItem("name", "Gmail");
              localStorage.setItem("icon", "assets/img/cloaks/gmail.png");

          case 'Clever':
              icon.setAttribute('href', 'assets/img/cloaks/clever.png');
              name.textContent = 'Clever | Portal';
              localStorage.setItem("name", "Clever | Portal");
              localStorage.setItem("icon", "assets/img/cloaks/clever.png");

          case 'Khan':
              icon.setAttribute('href', 'assets/img/cloaks/khan.png');
              name.textContent = 'Dashboard | Khan Academy';
              localStorage.setItem("name", "Dashboard | Khan Academy");
              localStorage.setItem("icon", "assets/img/cloaks/khan.png");
              break;
          default:
              break;
      }
  }


  var themeid = localStorage.getItem("theme");
  //Loads theme
  themeEle = document.createElement("link");
  themeEle.rel = "stylesheet";
  if (themeid) {
      switch (themeid) {
          case 'b':
              themeEle.href = "assets/css/themes/bannana.css";
              break;
          case 'bg':
              themeEle.href = "assets/css/themes/blue-green.css";
              break;
          case 'cr':
              themeEle.href = "assets/css/themes/cherryRed.css";
              break;
          case 'd':
              themeEle.href = "assets/css/themes/dark.css";
              break;
          case 'fg':
              themeEle.href = "assets/css/themes/forestGreen.css";
              break;
          case 'light':
              themeEle.href = "assets/css/themes/solid/light.css";
              break;
          case 'm':
              themeEle.href = "assets/css/themes/milkshake.css";
              break;
          case 'nb':
              themeEle.href = "assets/css/themes/nightBlue.css";
              break;
          case 'rb':
              themeEle.href = "assets/css/themes/red-black.css";
              break;
          case 'v4':
              themeEle.href = "assets/css/themes/solid/legacy.css";
              break;
          case 'midnight':
              themeEle.href = "assets/css/themes/solid/midnight.css";
              break;
          case 'black-red':
              themeEle.href = "assets/css/themes/gradient/black-red.css";
              break;
          case 'black-blue':
              themeEle.href = "assets/css/themes/gradient/black-blue.css";
              break;
          case 'black-green':
              themeEle.href = "assets/css/themes/gradient/black-green.css";
              break;
          case 'red':
              themeEle.href = "assets/css/themes/gradient/red.css";
              break;
          case 'purple':
              themeEle.href = "assets/css/themes/gradient/purple.css";
              break;
          case 'black-orange':
              themeEle.href = "assets/css/themes/gradient/black-orange.css";
              break;
          case 'ocean-blue':
              themeEle.href = "assets/css/themes/solid/ocean-blue.css";
              break;
          case 'black-purple':
              themeEle.href = "assets/css/themes/gradient/black-purple.css";
              break;
          case 'black-coral':
              themeEle.href = "assets/css/themes/gradient/black-coral.css";
              break;
          case 'black-ruby':
              themeEle.href = "assets/css/themes/gradient/black-ruby.css";
              break;
          case 'black-yellow':
              themeEle.href = "assets/css/themes/gradient/black-yellow.css";
              break;
          case 'black-pink':
              themeEle.href = "assets/css/themes/gradient/black-pink.css";
              break;
          case 'black-white':
              themeEle.href = "assets/css/themes/gradient/black-white.css";
              break;
          case 'dark-purple':
              themeEle.href = "assets/css/themes/gradient/dark-purple.css";
              break;
          case 'sunset':
              themeEle.href = "assets/css/themes/gradient/sunset.css";
              break;
          case 'indigo':
              themeEle.href = "assets/css/themes/gradient/indigo.css";
              break;
          case 'fire-ice':
              themeEle.href = "assets/css/themes/gradient/fire-ice.css";
              break;
          case 'purple-blue':
              themeEle.href = "assets/css/themes/gradient/purple-blue.css";
              break;
          case 'hacker':
              themeEle.href = "assets/css/themes/hacker.css";
              break;
      }
  }
  document.body.appendChild(themeEle);
});

document.addEventListener("DOMContentLoaded", function() {
  // Save background image
  const saveButton = document.getElementById("save-button");
  saveButton.addEventListener("click", function() {
      const backgroundInput = document.getElementById("background-input");
      const imageURL = backgroundInput.value;
      if (imageURL !== "") {
          localStorage.setItem("backgroundImage", imageURL);
          document.body.style.backgroundImage = `url('${imageURL}')`;
          backgroundInput.value = "";
      }
  });

  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function() {
      localStorage.removeItem("backgroundImage");
      document.body.style.backgroundImage = "url('default-background.jpg')";
  });

  const savedBackgroundImage = localStorage.getItem("backgroundImage");
  if (savedBackgroundImage) document.body.style.backgroundImage = `url('${savedBackgroundImage}')`;
  

  // Panic link
  const eventKey = localStorage.getItem("eventKey") || "`";
  const panicLink = localStorage.getItem("panicLink") || "https://classroom.google.com/";
  document.addEventListener("keydown", function(event) {
      if (event.key === eventKey) {
          if (window.self !== window.top) window.parent.window.location.replace(panicLink);
          else window.parent.window.location.replace(panicLink);
      }
  });

  const eventKeyInput = document.getElementById("eventKeyInput");
  eventKeyInput.addEventListener("input", function() {
      eventKey = eventKeyInput.value;
      localStorage.setItem("eventKey", eventKey);
      localStorage.setItem("panicLink", panicLink);
  });

  const linkInput = document.getElementById("linkInput");
  linkInput.addEventListener("input", function() {
      panicLink = linkInput.value;
  });

  // Search engine
  const searchid = localStorage.getItem("search");
  const themeEle = document.createElement("script");
  switch (searchid) {
      case "g":
          themeEle.innerHTML = "document.getElementById('uv-search-engine').value = 'https://www.google.com/search?q=';";
          break;
      case "b":
          themeEle.innerHTML = "document.getElementById('uv-search-engine').value = 'https://www.bing.com/search?form=&q=';";
          break;
      case "ddg":
          themeEle.innerHTML = "document.getElementById('uv-search-engine').value = 'https://duckduckgo.com/?q=';";
          break;
      case "searx":
          themeEle.innerHTML = "document.getElementById('uv-search-engine').value = 'https://searxng.site/search?q=';";
          break;
      case "q":
          themeEle.innerHTML = "document.getElementById('uv-search-engine').value = 'https://www.qwant.com/?q=';";
          break;
      case "e":
          themeEle.innerHTML = "document.getElementById('uv-search-engine').value = 'https://www.ecosia.org/search?method=index&q=';";
          break;
      case "y":
          themeEle.innerHTML = "document.getElementById('uv-search-engine').value = 'https://search.yahoo.com/search?p=';";
          break;
      default:
          if (localStorage.getItem("customsearch") === "true") themeEle.innerHTML = `document.getElementById("uv-search-engine").value=${localStorage.getItem('search')}`;
          break;
  }

  document.body.appendChild(themeEle);

  // Add script tag
  const scripts = document.createElement("script");
  scripts.setAttribute("src", "assets/js/scripts.js");
  document.head.append(scripts);
});

// Retrieve selected option from localStorage and update the head section
const selectedOption = localStorage.getItem('selectedOption');
if (selectedOption) updateHeadSection(selectedOption);


let originalTitle = document.getElementById('dynamic-title').href;
let originalFavicon = document.getElementById('dynamic-favicon').href;

function handleVisibilityChange() {
 if (localStorage.getItem('clickoff_cloaking') === 'true') {
   if (document.hidden) {
     document.title = "Google";
     document.querySelector("link[rel*='icon']").href = "https://raw.githubusercontent.com/whitespider-dev/whitespider/Main/res/google.ico";
   } else {
      document.title = "Hydrogen";
      document.getElementById('dynamic-favicon').href = originalFavicon;
    }
   }
}
document.addEventListener("visibilitychange", handleVisibilityChange);
