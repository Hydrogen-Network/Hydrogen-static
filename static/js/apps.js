const appsContainer = document.querySelector('.appcontainer');

async function loadgame() {
// Fetch the apps data from a JSON file
fetch('/static/json/apps.json')
  .then((res) => res.json())
  .then((apps) => {
    // Loop through each app and create a new app element for it
    apps.forEach((app) => {
      const appEl = document.createElement('li');
      appEl.innerHTML = `<div class="appcard"><a href="#" onclick="localStorage.setItem('currentapp', '${app.url}'); location.href='play.html';"><img src="${app.img}" class="appimage"/><div class="appinfo"><b><p class="appname">${app.name}</p></b><p class="appdesc">${app.desc}</p></div></a></div>`;
      document.getElementById('appscontainer').appendChild(appEl);
    });
  })
  .catch((e) => {
    console.error('Could not load apps. '+e);
  });
}


