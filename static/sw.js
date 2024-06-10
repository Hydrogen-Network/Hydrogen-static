importScripts("assets/dynamic/dynamic.config.js");
importScripts("assets/dynamic/dynamic.worker.js");
importScripts("/assets/epoxy/index.js");
importScripts("/assets/uv/uv.bundle.js");
importScripts("/assets/uv/uv.config.js");
importScripts("/assets/uv/uv.sw.js");

const sw = new UVServiceWorker();
const dynamic = new Dynamic();

self.dynamic = dynamic;

self.addEventListener("fetch", (event) => {
  if (
    event.request.url.startsWith(location.origin + self.__dynamic$config.prefix)
  ) {
    console.log(dynamic.fetch(event));
    event.respondWith(
      (async function () {
        if (await dynamic.route(event)) {
          return await dynamic.fetch(event);
        }

        return await fetch(event.request);
      })()
    );
  }
  if (event.request.url.startsWith(location.origin + "/uv/service/")){
    event.respondWith(sw.fetch(event));
  }
});

