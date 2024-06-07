// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/uv/service/",
      bare: 'https://bare.bareproxy.workers.dev/',
  encodeUrl: Ultraviolet.codec.plain.encode,
  decodeUrl: Ultraviolet.codec.plain.decode,
  handler: "/uv/uv.handler.js",
  client: "/uv/uv.client.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};
