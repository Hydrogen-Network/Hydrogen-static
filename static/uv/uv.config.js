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


if(




fetch("https://app.uptrends.com/signalr/send?transport=serverSentEvents&clientProtocol=2.1&connectionToken=0it9tXhLRsQuwdH%2B3WwoNMGk%2Fp0hG5pye%2BI1K2ru5HidnG4C4OVOYQWsfMEVsDMB98X0AJ1TsxRumY%2BBvtVniDUnhEGgTxc9PFRZpAS9PEE5Ij5Iz57mAg1j4STrHGt%2B&connectionData=%5B%7B%22name%22%3A%22contentupdatehub%22%7D%5D", {
  "headers": {
    "accept": "text/plain, */*; q=0.01",
    "accept-language": "en-US,en;q=0.8",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Brave\";v=\"121\", \"Chromium\";v=\"121\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://app.uptrends.com/tools/http?lang=en",
  "referrerPolicy": "same-origin",
  "body": "data=%7B%22H%22%3A%22contentupdatehub%22%2C%22M%22%3A%22start%22%2C%22A%22%3A%5B%22ToolHTTP%22%2C%22%7B%5C%22Url%5C%22%3A%5C%22gm%5C%22%2C%5C%22CheckPointIds%5C%22%3A%5B%5D%2C%5C%22SelectedCheckpointName%5C%22%3A%5C%22%5C%22%7D%22%2C%22undefined%22%2C%22en-US%22%5D%2C%22I%22%3A0%7D",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});
