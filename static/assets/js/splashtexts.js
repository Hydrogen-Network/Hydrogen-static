async function say() {
  const response = await fetch("assets/js/json/say.json");
  const says = await response.json();
  const randomSplash = says[Math.floor(Math.random() * says.length)];

  if (randomSplash === "%GAMES_NUMBER%") {
    const games = await fetch(location.origin + "assets/js/json/games.json").json();
    randomSplash = `There are ${games.length} games currently`;
  } else if (randomSplash === "%SPLASH_NUMBER%") {
    const splashCacheAll = await fetch("assets/js/json/say.json").json();
    randomSplash = `There are ${splashCacheAll.length} of these messages!`;
  }

  document.querySelector("#splash").innerHTML = randomSplash;
}

say();
