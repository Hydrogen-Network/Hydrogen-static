async function say(){
    var say = await fetch("/static/js/json/say.json");
    var says = say.json();
    var randomSplash = says[Math.floor(Math.random() *  says.length)];

  // If the random message is "%GAMES_NUMBER%", replace it with the number of games available
  if (randomSplash == "%GAMES_NUMBER%") {
    var games = await fetch(location.origin + "/static/json/games.json");
    var game = games.json();
    randomSplash = "There are " + game.length + " games currently";
  }
  // If the random message is "%SPLASH_NUMBER%", replace it with the total number of splash messages
  else if (randomSplash == "%SPLASH_NUMBER%") {
    var splashCache = await fetch("/static/js/json/say.json");
    var splashCacheAll = splashCacheAll.json();
    randomSplash = "There are " + splashCacheAll.length + " of these messages!";
  }
randomSplash =  document.querySelector("#splash").innerHTML = randomSplash;
}

say();
