const appsContainer = document.querySelector('.appcontainer');

// Fetch the apps data from a JSON file
fetch('/static/js/json/apps.json')
  .then((res) => res.json())
  //.then((apps.sort((a, b) => a.name.localeCompare(b.name))) => {
  .then((apps)) => {
    // Loop through each app and create a new app element for it
    apps.forEach((app) => {
      const appEl = document.createElement('li');
      appEl.innerHTML = `
      <div class="appcard" data-category="${app.categories}">
          <a href="#" onclick="localStorage.setItem('currentapp', '${app.url}'); localStorage.setItem('currentappname', '${app.name}'); localStorage.setItem('currentappcheat', '${app.cheat}'); location.href='play.html';">
          <img title='${app.name}' src="${app.img}" class="appimage"/>
              <div class="appinfo">
                  <b>
                      <p class="appname">${app.name}</p>
                  </b>
                      <p class="appdesc">${app.desc}</p>
              </div>
          </a>
      </div>
      `;
      document.querySelector('.appcontainer').appendChild(appEl);
    });
  })
  .catch((e) => {
    console.error('Could not load apps. '+e);
  });



function showImages() {
  var selectedCategories = Array.from(document.querySelectorAll("#category option:checked")).map(option => option.value);
  var apps = document.getElementsByClassName("appcard");

  for (var i = 0; i < apps.length; i++) {
    var app = apps[i];
    var categories = app.getAttribute("data-category").split(" ");
    if (selectedCategories.length === 0 || selectedCategories.some(category => categories.includes(category))) {
      app.style.display = "block";
    } else {
      app.style.display = "none";
    }
  }
}
