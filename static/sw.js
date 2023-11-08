importScripts('/static/uv/uv.bundle.js');
importScripts('/static/uv/uv.config.js');
importScripts(__uv$config.sw || '/static/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
