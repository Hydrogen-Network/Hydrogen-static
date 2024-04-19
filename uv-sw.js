importScripts('https://aluu.xyz/epoxy/index.js');
importScripts("baremux/bare.cjs")
importScripts("/uv/uv.bundle.js");
importScripts("/uv/uv.sw.js");
importScripts("https://aluu.xyz/libcurl/index.js");
importScripts(__uv$config.sw);
importScripts("https://aluu.xyz/bare_transport.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
