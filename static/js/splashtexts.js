async function say(){
    var say = await fetch("/static/js/json/say.json").json();
    var randomSplash = say[Math.floor(Math.random() *  say.length)];

  // If the random message is "%GAMES_NUMBER%", replace it with the number of games available
  if (randomSplash == "%GAMES_NUMBER%") {
    var games = await fetch(location.origin + "/static/json/games.json").json();
    randomSplash = "There are " + games.length + " games currently";
  }
  // If the random message is "%SPLASH_NUMBER%", replace it with the total number of splash messages
  else if (randomSplash == "%SPLASH_NUMBER%") {
    var splashCacheAll = await fetch("/static/js/json/say.json").json();
    randomSplash = "There are " + splashCacheAll.length + " of these messages!";
  }
randomSplash =  document.querySelector("#splash").innerHTML = randomSplash;
}

say();
