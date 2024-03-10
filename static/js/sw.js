importScripts('dy/config.js')
importScripts('dy/worker.js')
importScripts('uv/bundle.js')
importScripts('uv/config.js')
importScripts('uv/sw.js')

const uv = new UVServiceWorker()
const dynamic = new Dynamic()

let userKey = new URL(location).searchParams.get('userkey')
self.dynamic = dynamic

self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async function () {
      if (await dynamic.route(event)) {
        return await dynamic.fetch(event)
      }

      if (event.request.url.startsWith(location.origin + '/dynamic/')) {
        return await uv.fetch(event)
      }

      return await fetch(event.request)
    })()
  )
})
