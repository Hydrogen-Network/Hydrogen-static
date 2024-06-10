importScripts("/dynamic/dynamic.config.js")
importScripts("/assets/dynamic/dynamic.worker.js")
importScripts("/assets/uv/uv.bundle.js")
importScripts("/assets/uv/uv.config.js")
importScripts(__uv$config.sw || "/assets/uv/uv.sw.js")
importScripts("/assets/epoxy/index.js")
importScripts("/assets/libcurl/index.js")

const uv = new UVServiceWorker()
const dynamic = new Dynamic()

self.dynamic = dynamic

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async function () {
      if (await dynamic.route(event)) {
        return await dynamic.fetch(event)
      }

      if (event.request.url.startsWith(location.origin + "/uv/service/")) {
        return await uv.fetch(event)
      }

      return await fetch(event.request)
    })()
  )
})
