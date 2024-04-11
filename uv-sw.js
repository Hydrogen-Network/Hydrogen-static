importScripts('../epoxy/index.js');
importScripts("/uv/uv.bundle.js");
importScripts("/uv/uv.sw.js");
importScripts(__uv$config.sw);

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
