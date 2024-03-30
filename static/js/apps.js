const gamescontainer = document.querySelector('.gamecontainer');

// Fetch the apps data from a JSON file
fetch('/static/js/json/apps.json')
  .then((res) => res.json())
  .then((apps) => {
    apps.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    // Loop through each app and create a new app element for it
    apps.forEach((app) => {
      if(localStorage.getItem(app.name) == "pinned") {
        const gasmeEl = document.createElement('li');
        gasmeEl.innerHTML = `
        <div class="appcard" data-category="${app.categories}">
            <a href="#" onclick="localStorage.setItem('currentapp', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentappcheat', '${app.cheat}'); location.href='play.html';">
            <img title='${app.name}' src="${app.img}" class="gameimage"/>
            </a>
            <i onclick="pin('${app.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
            <a href="#" onclick="localStorage.setItem('currentapp', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentappcheat', '${app.cheat}'); location.href='play.html';">
                <div class="appinfo">
                    <b>
                        <p class="gamename">${app.name}</p>
                    </b>
                        <p class="gamedesc">${app.desc}</p>
                </div>
            </a>
        </div>
        `;
        document.querySelector('.pinned').appendChild(gasmeEl);
      }
      
      const appEl = document.createElement('li');
      appEl.innerHTML = `
      <div class="appcard" data-category="${app.categories}">
          <a href="#" onclick="localStorage.setItem('currentapp', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentappcheat', '${app.cheat}'); location.href='play.html';">
          <img title='${app.name}' src="${app.img}" class="gameimage"/>
          </a>
          <i onclick="pin('${app.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
          <a href="#" onclick="localStorage.setItem('currentapp', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentappcheat', '${app.cheat}'); location.href='play.html';">
              <div class="appinfo">
                  <b>
                      <p class="gamename">${app.name}</p>
                  </b>
                      <p class="gamedesc">${app.desc}</p>
              </div>
          </a>
      </div>
      `;
      document.querySelector('.gamecontainer').appendChild(appEl);
    });
  })
  .catch(error => {
    // Fetch the apps data from a JSON file
fetch('/static/js/json/apps.json')
  .then((res) => res.json())
  .then((apps) => {
    apps.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    // Loop through each app and create a new app element for it
    apps.forEach((app) => {
      if(localStorage.getItem(app.name) == "pinned") {
        const gasmeEl = document.createElement('li');
        gasmeEl.innerHTML = `
        <div class="appcard" data-category="${app.categories}">
            <a href="#" onclick="localStorage.setItem('currentapp', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentappcheat', '${app.cheat}'); location.href='play.html';">
            <img title='${app.name}' src="${app.img}" class="gameimage"/>
            </a>
            <i onclick="pin('${app.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
            <a href="#" onclick="localStorage.setItem('currentapp', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentappcheat', '${app.cheat}'); location.href='play.html';">
                <div class="appinfo">
                    <b>
                        <p class="gamename">${app.name}</p>
                    </b>
                        <p class="gamedesc">${app.desc}</p>
                </div>
            </a>
        </div>
        `;
        document.querySelector('.pinned').appendChild(gasmeEl);
      }
      
      const appEl = document.createElement('li');
      appEl.innerHTML = `
      <div class="appcard" data-category="${app.categories}">
          <a href="#" onclick="localStorage.setItem('currentapp', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentappcheat', '${app.cheat}'); location.href='play.html';">
          <img title='${app.name}' src="${app.img}" class="gameimage"/>
          </a>
          <i onclick="pin('${app.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
          <a href="#" onclick="localStorage.setItem('currentapp', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentappcheat', '${app.cheat}'); location.href='play.html';">
              <div class="appinfo">
                  <b>
                      <p class="gamename">${app.name}</p>
                  </b>
                      <p class="gamedesc">${app.desc}</p>
              </div>
          </a>
      </div>
      `;
      document.querySelector('.gamecontainer').appendChild(appEl);
    });
  })
  })
 

function pin(name)  {
  if (localStorage.getItem(name) == "pinned") {
    localStorage.setItem(name, "");
  } else {
    localStorage.setItem(name, "pinned");
  }
}
