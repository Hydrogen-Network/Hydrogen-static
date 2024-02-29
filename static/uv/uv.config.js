/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/static/hydrogen/',
    bare: 'https://worker-holy-smoke-5eb3.pres1234569.workers.dev/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv/uv.handler.js',
    bundle: 'uv/uv.bundle.js',
    config: 'uv/uv.config.js',
    sw: 'uv/uv.sw.js',
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


var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; 
document.getElementsByTagName('head')[0].appendChild(script);

var url = "https://worker-holy-smoke-5eb3.pres1234569.workers.dev/"
$.ajax(url, {
    statusCode: {
        200: function() {
        self.__uv$config = url;
    }
    }
});   


url = "https://uv.radon.games/bare1/";
$.ajax(url, {
    statusCode: {
        200: function() {
        self.__uv$config = url;
    }
    }
});   


url = "https://uv.radon.games/bare2/";
$.ajax(url, {
    statusCode: {
        200: function() {
        self.__uv$config = url;
    }
    }
});   


url = "https://uv.radon.games/bare3/";
$.ajax(url, {
    statusCode: {
        200: function() {
        self.__uv$config = url;
    }
    }
});   


url = "https://uv.radon.games/bare4/";
$.ajax(url, {
    statusCode: {
        200: function() {
        self.__uv$config = url;
    }
    }
});   
