var CACHE_NAME = 'example';

var offlineFundamentals = [
  '',
  'css/theme/gradient/black-blue.css',
  'css/theme/gradient/black-coral.css',
  'css/theme/gradient/black-green.css',
  'css/theme/gradient/black-orange.css',
  'css/theme/gradient/black-pink.css',
  'css/theme/gradient/black-purple.css',
  'css/theme/gradient/black-ruby.css',
  'css/theme/gradient/black-red.css',
  'css/theme/gradient/black-white.css',
  'css/theme/gradient/black-yellow.css',
  'css/theme/gradient/dark.purple.css',
  'css/theme/gradient/fire-ice.css',
  'css/theme/gradient/indigo.css',
  'css/theme/gradient/purple-blue.css',
  'css/theme/gradient/purple.css',
  'css/theme/gradient/red.css',
  'css/theme/gradient/sunset.css',
  'css/theme/solid/legacy.css',
  'css/theme/solid/light.css',
  'css/theme/solid/midnight.css',
  'css/theme/solid/ocean-blue.css',
  'css/themes/bannana.css',
  'css/themes/blue-green.css',
  'css/themes/cherryRed.css',
  'css/themes/forestGreen.css',
  'css/themes/hacker.css',
  'css/themes/legacy.css',
  'css/themes/light.css',
  'css/themes/milkshake.css',
  'css/themes/nightBlue.css',
  'css/themes/red-black.css',
  'css/themes/sunset.css',
  'css/buttons.css',
  'css/cheats.css',
  'css/cookies.css',
  'css/games.css',
  'css/index.css',
  'css/login.css',
  'css/meme.css',
  'css/navbar.css',
  'css/other.css',
  'css/settings.css',
  'extras/emulator/index.html',
  'extras/ab.html',
  'extras/ai.html',
  'extras/bookmarklets.html',
  'extras/calc.html',
  'extras/chatroom.html',
  'extras/cheats.html',
  'extras/domuplayer.js',
  'extras/meme.html',
  'extras/img2text.html',
  'extras/ruffle.html',
  'extras/tab.html',
  'extras/webhooksender.html',
  'img/cloaks/classroom.png',
  'img/cloaks/clever.png',
  'img/cloaks/drive.png',
  'img/cloaks/gmail.png',
  'img/cloaks/google.png',
  'img/cloaks/khan.png',
  'img/cloaks/schoology.png',
  'img/a3783174096_10.jpg',
  'img/black.jpeg',
  'img/defaultSong.jpg',
  'img/gas.png',
  'img/hydro.png',
  'img/loading.gif',
  'img/mainbg.gif',
  'img/soccre.PNG',
  'img/x.png',
  'js/json/apps.json',
  'js/json/big.json',
  'js/json/games.json',
  'js/json/hacks.json',
  'js/json/plugins.json',
  'js/json/say.json',
  'js/lib/jquery-3.2.1.min.js',
  'js/addons.js',
  'js/apps.js',
  'js/cloak.js',
  'js/clock.js',
  'js/cookies.js',
  'js/cursor.js',
  'js/error.js',
  'js/games.js',
  'js/hacks.js',
  'js/home.js',
  'js/libary.js',
  'js/main.js',
  'js/panic.js',
  'js/particles.js',
  'js/password.js',
  'js/scripts.js',
  'js/setting.js',
  'js/settings.js',
  'js/shortkey.js',
  'js/snow.js',
  'js/splashtexts.js',
  'music/albuminfo.html',
  'music/albuminfo.js',
  'music/hover.min.css',
  'music/index.html',
  'music/jsmediatags.min.js',
  'music/library.css',
  'music/library.js',
  'music/quick.js',
  'music/script.js',
  'music/songInfo.html',
  'music/songinfo.js',
  'music/style.css',
  'redirect/redirect.html',
  'redirect/redirecting.html',
  'uv/uv.config.js',
  'uv/uv.bundle.js',
  'uv/uv.sw.js',
  'uv/uv.handler.js',
  '404.html',
  'BingSiteAuth.xml',
  'addons.html',
  'ads.txt',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'apple-touch-icon.png',
  'apps.html',
  'browserconfig.xml',
  'contact.html',
  'cookieconsentpolicy.html',
  'extras.html',
  'faq.html',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon.ico',
  'gamehacks.html',
  'games.html',
  'googlefca2f35f1393947a.html',
  'index.html',
  'index.js',
  'lastresort.html',
  'mstile-150x150.png',
  'play.html',
  'register-sw.js',
  'render.yaml',
  'robots.txt',
  'safari-pinned-tab.svg',
  'search.js',
  'settings.html',
  'site.webmanifest',
  'sitemap.xml',
  'sw.js',
  'uv-sw.js',
  'uv.js',
  'offline.manifest'
]; self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(offlineFundamentals);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = ['example'];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
