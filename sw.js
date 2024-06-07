/*
importScripts('/epoxy/index.js');
importScripts('epoxy/index.js');
importScripts('uv/uv.bundle.js');
importScripts('uv/uv.config.js');
importScripts(__uv$config.sw || 'uv.sw.js');
importScripts("/dynamic/dynamic.config.js");
importScripts("/dynamic/dynamic.worker.js");
importScripts('/dip/dip.worker.js');
//importScripts("/amphere/config.js");
//importScripts("/amphere/bundle.js");
//importScripts("/amphere/worker.js");

//const ampere = new AmpereWorker();
const sw = new UVServiceWorker();
const dynamic = new Dynamic();
const dip = new DIPServiceWorker('/dip/dip.worker.js');

self.dynamic = dynamic;

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith(location.origin + self.__dynamic$config.prefix)) {
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
  if (event.request.url.startsWith(location.origin + '/service/uv/')) {
    event.respondWith(sw.fetch(event));
    console.log(sw.fetch(event));
  }
  if (event.request.url.startsWith(location.origin+'/service/dip/')) event.respondWith(dip.fetch(event));
  //if (event.request.url.startsWith(location.origin+'/service/ampere')) event.respondWith(ampere.fetch(event));

});
*/


importScripts('epoxy/index.js');
importScripts('uv/uv.bundle.js');
importScripts('uv/uv.config.js');
importScripts(__uv$config.sw || 'uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
