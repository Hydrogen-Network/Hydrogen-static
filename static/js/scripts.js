function script(text) {
  console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
}

// ====================================
// SCRIPT INJECTION
// ====================================
const gogascript27 = document.createElement("script");
gogascript27.setAttribute("async", "");
gogascript27.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-Y1GKR3GL1R");
const inlinegogascript843 = document.createElement("script");
inlinegogascript843.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y1GKR3GL1R');`;
document.head.append(gogascript27, inlinegogascript843);
script("Injected script 1/4 (Google Tag Manager)");

const adblockhandle44 = document.createElement("script");
adblockhandle44.setAttribute("src", "https://fundingchoicesmessages.google.com/i/pub-5756835229788588?ers=1");
adblockhandle44.setAttribute("nonce", "yibq-w_TR5NOCRWsU-VL0Q");
adblockhandle44.setAttribute("async", "");
document.head.append(adblockhandle44);
script("Injected script 2/4 (Ad stuff)");

const adscipterz92 = document.createElement("script");
adscipterz92.setAttribute("async", "");
adscipterz92.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3510278623917680");
adscipterz92.setAttribute("crossorigin", "anonymous");
document.head.append(adscipterz92);
script("Injected script 3/4(Ad stuff)");

const admeta = document.createElement("meta");
admeta.setAttribute("name", "google-adsense-account");
admeta.setAttribute("content", "ca-pub-3510278623917680");
document.head.append(admeta);
script("Injected script 4/4(Ad stuff)");

