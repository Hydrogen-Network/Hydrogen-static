document.addEventListener("DOMContentLoaded", async () => {
    const bg = await fetch("/js/json/bg.json");
    const bga = await bg.json();
    const randombg = bga[Math.floor(Math.random() * bga.length)];
    if (localStorage.getItem('RandomBG') === "true") {
      document.body.style.background = `url(${randombg})`;
    }
    if (localStorage.getItem("cursor") === "true") {
      document.body.appendChild(document.createElement("script")).src = "assets/js/cursor.js";
    }
    if (localStorage.getItem("v4Particles") === "true") {
      document.body.appendChild(document.createElement("script")).src =
        "assets/js/snow.js";
    }
    if (localStorage.getItem("customcolor") === "true") {
      document.body.style.background = localStorage.getItem("backdrop-color");
    }
  });
  
  document.addEventListener('keydown', event => {
    console.log('Keydown event:', event);
  });
  
  document.body.appendChild(document.createElement("script")).src = "assets/js/scripts.js";
  
const d = document.createElement("script");
d.setAttribute("src", "assets/js/scripts.js");