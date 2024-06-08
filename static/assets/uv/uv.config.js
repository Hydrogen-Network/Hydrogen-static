// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/uv/service/",
  bare: "https://bare.bareproxy.workers.dev/",
  encodeUrl: Ultraviolet.codec.plain.encode,
  decodeUrl: Ultraviolet.codec.plain.decode,
  handler: "/assets/uv/uv.handler.js",
  client: "/assets/uv/uv.client.js",
  bundle: "/assets/uv/uv.bundle.js",
  config: "/assets/uv/uv.config.js",
  sw: "/assets/uv/uv.sw.js",
};
