function fixJSON(json){
    function bulkRegex(str, callback){
        if(callback && typeof callback === 'function'){
            return callback(str);
        }else if(callback && Array.isArray(callback)){
            for(let i = 0; i < callback.length; i++){
                if(callback[i] && typeof callback[i] === 'function'){
                    str = callback[i](str);
                }else{break;}
            }
            return str;
        }
        return str;
    }
    if(json && json !== ''){
        if(typeof json !== 'string'){
            try{
                json = JSON.stringify(json);
            }catch(e){return false;}
        }
        if(typeof json === 'string'){
            json = bulkRegex(json, false, [
                str => str.replace(/[\n\t]/gm, ''),
                str => str.replace(/,\}/gm, '}'),
                str => str.replace(/,\]/gm, ']'),
                str => {
                    str = str.split(/(?=[,\}\]])/g);
                    str = str.map(s => {
                        if(s.includes(':') && s){
                            let strP = s.split(/:(.+)/, 2);
                            strP[0] = strP[0].trim();
                            if(strP[0]){
                                let firstP = strP[0].split(/([,\{\[])/g);
                                firstP[firstP.length-1] = bulkRegex(firstP[firstP.length-1], false, p => p.replace(/[^A-Za-z0-9\-_]/, ''));
                                strP[0] = firstP.join('');
                            }
                            let part = strP[1].trim();
                            if((part.startsWith('"') && part.endsWith('"')) || (part.startsWith('\'') && part.endsWith('\'')) || (part.startsWith('`') && part.endsWith('`'))){
                                part = part.substr(1, part.length - 2);
                            }
                            part = bulkRegex(part, false, [
                                p => p.replace(/(["])/gm, '\\$1'),
                                p => p.replace(/\\'/gm, '\''),
                                p => p.replace(/\\`/gm, '`'),
                            ]);
                            strP[1] = ('"'+part+'"').trim();
                            s = strP.join(':');
                        }
                        return s;
                    });
                    return str.join('');
                },
                str => str.replace(/(['"])?([a-zA-Z0-9\-_]+)(['"])?:/g, '"$2":'),
                str => {
                    str = str.split(/(?=[,\}\]])/g);
                    str = str.map(s => {
                        if(s.includes(':') && s){
                            let strP = s.split(/:(.+)/, 2);
                            strP[0] = strP[0].trim();
                            if(strP[1].includes('"') && strP[1].includes(':')){
                                let part = strP[1].trim();
                                if(part.startsWith('"') && part.endsWith('"')){
                                    part = part.substr(1, part.length - 2);
                                    part = bulkRegex(part, false, p => p.replace(/(?<!\\)"/gm, ''));
                                }
                                strP[1] = ('"'+part+'"').trim();
                            }
                            s = strP.join(':');
                        }
                        return s;
                    });
                    return str.join('');
                },
            ]);
            try{
                json = JSON.parse(json);
            }catch(e){return false;}
        }
        return json;
    }
    return false;
}

const gamesContainer = document.querySelector('.gamecontainer');

// Fetch the games data from a JSON file
fetch('/js/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    games.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    games = JSON.stringify(fixJSON(games));
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      if(localStorage.getItem(game.name) == "pinned") {
        const gasmeEl = document.createElement('li');
        gasmeEl.innerHTML = `
        <div class="gamecard" data-category="${game.categories}">
            <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
            <img title='${game.name}' src="${game.img}" class="gameimage"/>
            </a>
            <i title="pin!" onclick="pin('${game.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
            <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
                <div class="gameinfo">
                    <b>
                        <p class="gamename">${game.name}</p>
                    </b>
                </div>
            </a>
        </div>
        `;
        document.querySelector('.pinned').appendChild(gasmeEl);
      }
      
      const gameE = document.createElement('li');
      gameE.innerHTML = `
      <div class="gamecard" data-category="${game.categories}">
          <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
          <img title='${game.name}' src="${game.img}" class="gameimage"/>
          </a>
          <i title="pin!" onclick="pin('${game.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
          <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
              <div class="gameinfo">
                  <b>
                      <p class="gamename">${game.name}</p>
                  </b>
              </div>
          </a>
      </div>
      `;
      document.querySelector('.gamecontainer').appendChild(gameE);
    });
  })
  .catch(error => {
    // Fetch the games data from a JSON file
fetch('/js/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    games.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      if(localStorage.getItem(game.name) == "pinned") {
        const gasme = document.createElement('li');
        gasme.innerHTML = `
        <div class="gamecard" data-category="${game.categories}">
            <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
            <img title='${game.name}' src="${game.img}" class="gameimage"/>
            </a>
            <i title="pin!" onclick="pin('${game.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
            <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
                <div class="gameinfo">
                    <b>
                        <p class="gamename">${game.name}</p>
                    </b>
                </div>
            </a>
        </div>
        `;
        document.querySelector('.pinned').appendChild(gasme);
      }
      
      const gameEll = document.createElement('li');
      gameEll.innerHTML = `
      <div class="gamecard" data-category="${game.categories}">
          <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
          <img title='${game.name}' src="${game.img}" class="gameimage"/>
          </a>
          <i title="pin!" onclick="pin('${game.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
          <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
              <div class="gameinfo">
                  <b>
                      <p class="gamename">${game.name}</p>
                  </b>
              </div>
          </a>
      </div>
      `;
      document.querySelector('.gamecontainer').appendChild(gameEll);
    });
  })
  })
 
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

function pin(name)  {
  if (localStorage.getItem(name) == "pinned") {
    localStorage.setItem(name, "");
  } else {
    localStorage.setItem(name, "pinned");
  }
}
