importScripts('/epoxy/index.js');
importScripts("/uv/uv.bundle.js");
importScripts("/uv/uv.config.js");
importScripts("/uv/uv.sw.js");
importScripts("/dynamic/dynamic.config.js");
importScripts("/dynamic/dynamic.worker.js");
importScripts('./dip/dip.worker.js');
importScripts("/amphere/config.js");
importScripts("/amphere/bundle.js");
importScripts("/amphere/worker.js");

const ampere = new AmpereWorker();
const sw = new UVServiceWorker();
const dynamic = new Dynamic();
const dip = new DIPServiceWorker('/dip/dip.worker.js');

self.dynamic = dynamic;

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith(location.origin + self.__dynamic$config.prefix)) {
    event.respondWith(
      (async function () {
        if (await dynamic.route(event)) {
          return await dynamic.fetch(event);
        }

        return await fetch(event.request);
      })()
    );
  } 
  if (event.request.url.startsWith(location.origin + __uv$config.prefix)) event.respondWith(sw.fetch(event));
  if (event.request.url.startsWith(location.origin+'/service/dip/')) event.respondWith(dip.fetch(event));
  if (event.request.url.startsWith(localation.origin+'/service/ampere')) event.respondWith(ampere.fetch(event));

});
