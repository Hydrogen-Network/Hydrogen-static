importScripts('../epoxy/index.js');
importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts('uv.sw.js');
importScripts('/dynamic/dynamic.config.js');
importScripts('/dynamic/dynamic.worker.js');

const uv = new UVServiceWorker()
const dynamic = new Dynamic()

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));

self.dynamic = dynamic;

self.addEventListener('fetch',
    event => {
        event.respondWith(
            (async function() {
                if (await dynamic.route(event)) {
                    return await dynamic.fetch(event);
                }

                if (event.request.url.startsWith(location.origin + "/uv/service/")) {
                    return await uv.fetch(event);
                }

                return await fetch(event.request);
            })()
        );
    }
);
