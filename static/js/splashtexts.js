async function say(){
    var say = await fetch("/static/js/json/say.json");
    var says = await say.json();
    var randomSplash = says[Math.floor(Math.random() *  says.length)];

  // If the random message is "%GAMES_NUMBER%", replace it with the number of games available
  if (randomSplash == "%GAMES_NUMBER%") {
    var gamesFetch = await fetch(location.origin + "/static/js/json/games.json");
    var games = await gamesFetch.json();
    randomSplash = "There are " + games.length + " games currently";
  }
  // If the random message is "%SPLASH_NUMBER%", replace it with the total number of splash messages
  else if (randomSplash == "%SPLASH_NUMBER%") {
    var say = await fetch("./js/json/say.json");
    var says = await say.json();
    var splashCacheAll = says;
    randomSplash = "There are " + splashCacheAll.length + " of these messages!";
  }
randomSplash =  document.querySelector("#splash").innerHTML = randomSplash;
}

say();
