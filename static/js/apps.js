const gamesContainer = document.querySelector('.gamecontainer');

// Fetch the games data from a JSON file
fetch('/static/js/json/apps.json')
  .then((res) => res.json())
  .then((apps) => {
    apps.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    // Loop through each game and create a new game element for it
    apps.forEach((app) => {
      if(localStorage.getItem(app.name) == "pinned") {
        const gasmeEl = document.createElement('li');
        gasmeEl.innerHTML = `
        <div class="gamecard">
            <a href="#" onclick="localStorage.setItem('currentgame', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentgamecheat', '${app.cheat}'); location.href='play.html';">
            <img title='${app.name}' src="${app.img}" class="gameimage"/>
            </a>
            <i onclick="pin('${app.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
            <a href="#" onclick="localStorage.setItem('currentgame', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentgamecheat', '${app.cheat}'); location.href='play.html';">
                <div class="gameinfo">
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
      
      const gameEl = document.createElement('li');
      gameEl.innerHTML = `
      <div class="gamecard" data-category="${app.categories}">
          <a href="#" onclick="localStorage.setItem('currentgame', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentgamecheat', '${app.cheat}'); location.href='play.html';">
          <img title='${app.name}' src="${app.img}" class="gameimage"/>
          </a>
          <i onclick="pin('${app.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
          <a href="#" onclick="localStorage.setItem('currentgame', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentgamecheat', '${app.cheat}'); location.href='play.html';">
              <div class="gameinfo">
                  <b>
                      <p class="gamename">${app.name}</p>
                  </b>
                      <p class="gamedesc">${app.desc}</p>
              </div>
          </a>
      </div>
      `;
      document.querySelector('.gamecontainer').appendChild(gameEl);
    });
  })
  .catch(error => {
    // Fetch the games data from a JSON file
fetch('/static/js/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    games.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      if(localStorage.getItem(app.name) == "pinned") {
        const gasmeEl = document.createElement('li');
        gasmeEl.innerHTML = `
        <div class="gamecard">
            <a href="#" onclick="localStorage.setItem('currentgame', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentgamecheat', '${app.cheat}'); location.href='play.html';">
            <img title='${app.name}' src="${app.img}" class="gameimage"/>
            </a>
            <i onclick="pin('${app.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
            <a href="#" onclick="localStorage.setItem('currentgame', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentgamecheat', '${app.cheat}'); location.href='play.html';">
                <div class="gameinfo">
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
      
      const gameEl = document.createElement('li');
      gameEl.innerHTML = `
      <div class="gamecard" data-category="${game.categories}">
          <a href="#" onclick="localStorage.setItem('currentgame', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentgamecheat', '${app.cheat}'); location.href='play.html';">
          <img title='${app.name}' src="${app.img}" class="gameimage"/>
          </a>
          <i onclick="pin('${app.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
          <a href="#" onclick="localStorage.setItem('currentgame', '${app.url}'); localStorage.setItem('currentgamename', '${app.name}'); localStorage.setItem('currentgamecheat', '${app.cheat}'); location.href='play.html';">
              <div class="gameinfo">
                  <b>
                      <p class="gamename">${app.name}</p>
                  </b>
                      <p class="gamedesc">${app.desc}</p>
              </div>
          </a>
      </div>
      `;
      document.querySelector('.gamecontainer').appendChild(gameEl);
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
