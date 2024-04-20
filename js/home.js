

document.addEventListener("DOMContentLoaded", function(event) {
    async function start() {
        var bg = await fetch("/js/json/bg.json");
        var bga = await bg.json();
        var randombg = bga[Math.floor(Math.random() * bga.length)];
        if (localStorage.getItem('RandomBG') == "true") {
            document.body.style.background = `url(${randombg})`;
        }
        if (window.localStorage.getItem("cursor") == "true") {
            const cur = document.createElement("script");
            cur.src = "./js/cursor.js";
            document.body.appendChild(cur);
        }
        if (window.localStorage.getItem("v4Particles") == "true") {
            const scr = document.createElement("script");
            scr.src = "./js/snow.js";
            document.body.appendChild(scr);
        }
        if (localStorage.getItem('customcolor') == "true") {
            document.body.style.background = localStorage.getItem("backdrop-color");
        }   
    }
    start();
});

document.addEventListener('keydown', function (event) {
      console.log('Keydown event:', event);
});
const d = document.createElement("script");
d.setAttribute("src", "/js/scripts.js");





let batteryPromise = navigator.getBattery();
batteryPromise.then(batteryCallback);

function batteryCallback(batteryObject) {
    printBatteryStatus(batteryObject);
    batteryObject.addEventListener('chargingchange', function(ev){
             printBatteryStatus(batteryObject);
    });
    batteryObject.addEventListener('levelchange', function(ev)
    {
             printBatteryStatus(batteryObject);
    });
}
function printBatteryStatus(batteryObject) {
    console.log("IsCharging", batteryObject.charging);
    console.log("Percentage", batteryObject.level*100);
   
    console.log("charging Time", batteryObject.chargingTime);
    console.log("DisCharging Time", batteryObject.dischargingTime);
}


if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("sw.js");
}
