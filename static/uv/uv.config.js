/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/static/hydrogen/',
    bare: 'https://usemetallic.com/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv/uv.handler.js',
    bundle: 'uv/uv.bundle.js',
    config: 'uv/uv.config.js',
    sw: 'uv/uv.sw.js',
//    inject: async (url) => {
  //      if (url.host === 'discord.com') {
    //        return `
      //          <script src="https://raw.githubusercontent.com/Vencord/builds/main/browser.js"></script>
        //        <link rel="stylesheet" href="https://raw.githubusercontent.com/Vencord/builds/main/browser.css">
         //     `;
        //}//

       // return ``;
    //},
};
