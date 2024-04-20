window.addEventListener("DOMContentLoaded", (event) => {

  
  const stockSW = "/uv/sw.js";

  const swAllowedHostnames = ["localhost", "127.0.0.1"];
  const wispserver = `${window.location.origin.replace(/^https?:\/\//, 'ws://')}/wisp/`;
  async function registerSW() {
    if (!navigator.serviceWorker) {
      if (
        location.protocol !== "https:" &&
        !swAllowedHostnames.includes(location.hostname)
      )
        throw new Error("Service workers cannot be registered without https.");

      throw new Error("Your browser doesn't support service workers.");
    }
    
    await navigator.serviceWorker.register("/sw.js", {
      scope: '/uv/service/',
    });
    
    console.log("UV Service Worker registered.");
    await navigator.serviceWorker.register("dynsw.js", {
      scope: '/a/q/',
    });
    
    await navigator.serviceWorker.register(stockSW, {
      scope: __uv$config.prefix,
    });

    const CurlMod = window.CurlMod
    console.log("Dynamic Service Worker registered.");
    
    if(localStorage.getItem("transport") == "bare") {
      BareMux.SetTransport("BareMod.BareClient", "https://server.flow-works.me/bare/" });
    } else if(localStorage.getItem("transport") == "libcurl") {
      BareMux.registerRemoteListener(navigator.serviceWorker.controller);
      BareMux.SetTransport("CurlMod.LibcurlClient", { wisp: wispserver, wasm: "https://cdn.jsdelivr.net/npm/libcurl.js@v0.6.7/libcurl.wasm" });
    } else if(localStorage.getitem("transport") == null || localStorage.getItem("transport") == "epoxy") {
      BareMux.SetTransport("EpxMod.EpoxyClient", { wisp: wispserver });
    }
  }
  registerSW();
});


