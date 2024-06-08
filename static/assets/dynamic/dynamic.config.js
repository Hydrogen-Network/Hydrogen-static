self.__dynamic$config = {
  prefix: "/service/dynamic/",
  encoding: "plain",
  mode: "production",
  tab: {
    title: "Google",
    icon: "https://google.com/favicon.ico",
    ua: null,
  },
  logLevel: 0,
  bare: {
    version: 2,
    path: "https://gointerstellar.app/o/",
  },
  tab: {
    title: null,
    icon: null,
    ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.3",
  },
  assets: {
    prefix: "/assets/dynamic/",
    files: {
      handler: "dynamic.handler.js?v=4",
      client: "dynamic.client.js?v=4",
      worker: "dynamic.worker.js?v=4",
      config: "dynamic.config.js?v=4",
      inject: "",
    },
  },
  block: [],
};
