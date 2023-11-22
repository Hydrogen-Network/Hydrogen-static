const gamesContainer = document.querySelector('.gamecontainer');

async function loadgame() {
// Fetch the games data from a JSON file
fetch('/static/js/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      const gameEl = document.createElement('li');
      gameEl.innerHTML = `
      <div class="gamecard" data-category="${game.categories}">
          <a href="#" onclick="localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
          <img title='${game.name}' src="${game.img}" class="gameimage"/>
              <div class="gameinfo">
                  <b>
                      <p class="gamename">${game.name}</p>
                  </b>
                      <p class="gamedesc">${game.desc}</p>
              </div>
          </a>
      </div>
      `;
      document.querySelector('.gamecontainer').appendChild(gameEl);
    });
  })
  .catch((e) => {
    console.error('Could not load games. '+e);
  });
}


function showImages() {
  var selectedCategories = Array.from(document.querySelectorAll("#category option:checked")).map(option => option.value);
  var games = document.getElementsByClassName("gamecard");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var categories = game.getAttribute("data-category").split(" ");
    if (selectedCategories.length === 0 || selectedCategories.some(category => categories.includes(category))) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}
