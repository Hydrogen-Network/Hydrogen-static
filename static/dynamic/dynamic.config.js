self.__dynamic$config = {
  prefix: '/dynamic/',
  encoding: 'xor',
  mode: 'production', 
  logLevel: 0, 
  bare: {
    version: 3, 
    path: 'https://gointerstellar.app/v/',
  },
  tab: {
    title: null,
    icon: null,
    ua: null,
  },  
  assets: {
    prefix: '/dynamic/',
    files: {
      handler: 'dynamic.handler.js',
      client: 'dynamic.client.js',
      worker: 'dynamic.worker.js',
      config: 'dynamic.config.js',
      inject: null,
    }
  },
  block: [
  ]
};
