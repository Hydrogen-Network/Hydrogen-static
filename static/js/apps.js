const appsContainer = document.querySelector('.appcontainer');

async function loadapp() {
// Fetch the apps data from a JSON file
fetch('/static/js/json/apps.json')
  .then((res) => res.json())
  .then((apps.sort((a, b) => a.name.localeCompare(b.name))) => {
    // Loop through each app and create a new app element for it
    apps.forEach((app) => {
      const appEl = document.createElement('li');
      appEl.innerHTML = `
      <div class="appcard" data-category="${app.categories}">
          <a href="#" onclick="localStorage.setItem('currentgame', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentgamecheat', '${app.cheat}'); location.href='play.html';">
          <img src="${app.img}" class="gameimage"/>
              <div class="gameinfo">
                  <b>
                      <p class="appname">${app.name}</p>
                  </b>
                      <p class="appdesc">${app.desc}</p>
              </div>
          </a>
      </div>
      `;
      document.getElementById('appscontainer').appendChild(appEl);
    });
  })
  .catch((e) => {
    console.error('Could not load apps. '+e);
  });
}

function showImages() {
  var selectedCategories = Array.from(document.querySelectorAll("#category option:checked")).map(option => option.value);
  var apps = document.getElementsByClassName("appcard");

  for (var i = 0; i < games.length; i++) {
    var app = apps[i];
    var categories = app.getAttribute("data-category").split(" ");
    if (selectedCategories.length === 0 || selectedCategories.some(category => categories.includes(category))) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}

function setPin(index) {
  pins = localStorage.getItem("pinnedGames");
  if(pins == null) {
    pins = [];
  }
  if(pins == "") {
    pins = [];
  }
  else {
    pins = pins.split(",").map(Number);
  }
  if(pinContains(index,pins)) {
    let remove = pins.indexOf(index);

    pins.splice(remove, 1);

  }
  else {
    pins.push(index);
  }
  localStorage.setItem("pinnedGames", pins);
  location.reload();
}
