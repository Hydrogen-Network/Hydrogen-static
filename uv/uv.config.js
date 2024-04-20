/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/uv/service/',
    bare: "https://bare.benrogo.net",
    encodeUrl: Ultraviolet.codec.plain.encode,
    decodeUrl: Ultraviolet.codec.plain.decode,
    handler: "uv/uv.handler.js",
    bundle: "uv/uv.bundle.js",
    config: "uv/uv.config.js",
    sw: "uv/uv.sw.js",
    inject: async (url) => {
       if (url.host === 'discord.com') {
           return `
               <script src="https://raw.githubusercontent.com/Vencord/builds/main/browser.js"></script>
               <link rel="stylesheet" href="https://raw.githubusercontent.com/Vencord/builds/main/browser.css">
             `;
        }

       return ``;
    },
};
/*
function checkServerStatus(url) {
    const startTime = performance.now();
    
    return fetch(url, { method: 'HEAD' })
        .then(response => {
            const endTime = performance.now();
            const ping = Math.round(endTime - startTime);
      
            if (response.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch(() => false);
}

if(checkServerStatus(localStorage.getItem("bareServer")) == true) {
    self.__uv$config.bare = localStorage.getItem("bareServer");
} else if(checkServerStatus("https://server.flow-works.me/bare/") == true) {
    self.__uv$config.bare = "https://server.flow-works.me/bare/";
} else if(checkServerStatus("https://bare.benrogo.net") == true) {
    self.__uv$config.bare = "https://bare.benrogo.net";
} else if(checkServerStatus("https://worker-holy-smoke-5eb3.pres1234569.workers.dev/") == true) {
    self.__uv$config.bare = "https://worker-holy-smoke-5eb3.pres1234569.workers.dev/";
} else if(checkServerStatus("https://uv.radon.games/bare1/") == true) {
    self.__uv$config.bare = "https://uv.radon.games/bare1/";
} else if(checkServerStatus("https://uv.radon.games/bare2/") == true) {
    self.__uv$config.bare = "https://uv.radon.games/bare2/";
} else if(checkServerStatus("https://uv.radon.games/bare3/") == true) {
    self.__uv$config.bare = "https://uv.radon.games/bare3/";
} else if(checkServerStatus("https://uv.radon.games/bare4/") == true) {
    self.__uv$config.bare = "https://uv.radon.games/bare4/";
}
*/
