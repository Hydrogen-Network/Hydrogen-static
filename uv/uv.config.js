
self.__uv$config = {
    prefix: '/service/uv/',
    bare: 'https://collegeapp.me/v/',
    encodeUrl: Ultraviolet.codec.plain.encode,
    decodeUrl: Ultraviolet.codec.plain.decode,
    handler: "/uv/uv.handler.js",
    bundle: "/uv/uv.bundle.js",
    config: "/uv/uv.config.js",
    sw: "/uv/uv.sw.js"
};


/*
let bare;

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
    bare = localStorage.getItem("bareServer");
} else if(checkServerStatus("https://server.flow-works.me/bare/") == true) {
    bare = "https://server.flow-works.me/bare/";
} else if(checkServerStatus("https://bare.benrogo.net") == true) {
    bare = "https://bare.benrogo.net";
} else if(checkServerStatus("https://worker-holy-smoke-5eb3.pres1234569.workers.dev/") == true) {
    bare = "https://worker-holy-smoke-5eb3.pres1234569.workers.dev/";
} else if(checkServerStatus("https://uv.radon.games/bare1/") == true) {
    bare = "https://uv.radon.games/bare1/";
} else if(checkServerStatus("https://uv.radon.games/bare2/") == true) {
    bare = "https://uv.radon.games/bare2/";
} else if(checkServerStatus("https://uv.radon.games/bare3/") == true) {
    bare = "https://uv.radon.games/bare3/";
} else if(checkServerStatus("https://uv.radon.games/bare4/") == true) {
    bare = "https://uv.radon.games/bare4/";
}


*/
