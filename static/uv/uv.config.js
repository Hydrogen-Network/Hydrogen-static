self.__uv$config = {
    prefix: '/static/tiw/',
    bare: ['https://coolbare.lightspeedsucks.workers.dev', 'https://phantomnetwork.cloud/bare/', 'https://baresw.starttiw.org/', 'https://polarislearning.org/bare', 'https://gointerstellar.app/outerspace',  'https://geoquiz.gq/bare/', 'https://tomp.app', 'https://uv.holyubofficial.net/bare1/', 'https://uv.holyubofficial.net/bare2/', 'https://uv.holyubofficial.net/bare3/', 'https://uv.holyubofficial.net/bare4/'],
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
