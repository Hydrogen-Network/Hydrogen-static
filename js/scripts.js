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
script("Injected script 1/7 (Google Tag Manager)");

const adblockhandle44 = document.createElement("script");
adblockhandle44.setAttribute("src", "https://fundingchoicesmessages.google.com/i/pub-5756835229788588?ers=1");
adblockhandle44.setAttribute("nonce", "yibq-w_TR5NOCRWsU-VL0Q");
adblockhandle44.setAttribute("async", "");
document.head.append(adblockhandle44);
script("Injected script 2/7 (Ad stuff)");

const adscipterz92 = document.createElement("script");
adscipterz92.setAttribute("async", "");
adscipterz92.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3510278623917680");
adscipterz92.setAttribute("crossorigin", "anonymous");
document.head.append(adscipterz92);
script("Injected script 3/7(Ad stuff)");

const admeta = document.createElement("meta");
admeta.setAttribute("name", "google-adsense-account");
admeta.setAttribute("content", "ca-pub-3510278623917680");
document.head.append(admeta);
script("Injected script 4/7(Ad stuff)");

const ads1 = document.createElement("script");
ads1.setAttribute("async", "");
ads1.setAttribute("src", "https://cdn.ampproject.org/v0/amp-ad-0.1.js");
ads1.setAttribute("custom-element", "amp-ad");
document.head.append(ads1);
const amp1 = document.createElement("amp-ad");
amp1.setAttribute("width", "100vw");
amp1.setAttribute("height", "320");
amp1.setAttribute("type", "adsense");
amp1.setAttribute("data-ad-client", "ca-pub-3510278623917680");
amp1.setAttribute("data-ad-slot", "8016680021");
amp1.setAttribute("data-auto-format", "rspv");
amp1.setAttribute("data-full-width", "");
amp1.innerHTML = '<div overflow=""></div>';
document.head.append(amp1);
script("Injected script 5/7(Ad stuff)");

const fontawesome = document.createElement("script");
fontawesome.setAttribute("src", "https://kit.fontawesome.com/1237c86ba0.js");
fontawesome.setAttribute("crossorigin", "anonymous");
document.head.append(fontawesome);
script("Injected script 6/7(Font Awesome)");

const brevo = document.createElement("script");
brevo.innerHTML = "(function(d, w, c) { w.BrevoConversationsID = '65d2cc78d5ef7768e562a305'; w[c] = w[c] || function() { (w[c].q = w[c].q || []).push(arguments); }; var s = d.createElement('script'); s.async = true; s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js'; if (d.head) d.head.appendChild(s); })(document, window, 'BrevoConversations');";
document.head.append(brevo);
script("Injected script 7/7(Brevo Chat)");

const manfeist = document.createElement("link");
manfeist.setAttribute("rel", "manifest");
manfeist.setAttribute("href", "/site.webmanifest");
document.head.append(manfeist);
script("Injected Manfeist");

const appleicon = document.createElement("link");
appleicon.setAttribute("rel", "apple-touch-icon");
appleicon.setAttribute("sizes", "180x180");
appleicon.setAttribute("href", "/apple-touch-icon.png");
document.head.append(appleicon);
script("Injected Icon 1/4(Icons)");

const icon32 = document.createElement("link");
icon32.setAttribute("rel", "icon");
icon32.setAttribute("type", "image/png");
icon32.setAttribute("sizes", "32x32");
icon32.setAttribute("href", "/favicon-32x32.png");
document.head.append(icon32);
script("Injected Icon 2/4(Icons)");

const icon16 = document.createElement("link");
icon16.setAttribute("rel", " icon");
icon16.setAttribute("type", "image/png");
icon16.setAttribute("sizes", "16x16");
icon16.setAttribute("href", "/favicon-16x16.png");
document.head.append(icon16);
script("Injected Icon 3/4(Icons)");

const maskicon = document.createElement("link");
maskicon.setAttribute("rel", "mask-icon");
maskicon.setAttribute("href", "/safari-pinned-tab.svg");
maskicon.setAttribute("color", "#5bbad5");
document.head.append(maskicon);
script("Injected Icon 4/4(Icons)");

const color = document.createElement("meta");
color.setAttribute("name", "msapplication-TileColor");
color.setAttribute("content", "#da532c");
document.head.append(color);
script("Injected Color 1/2");

const color2 = document.createElement("meta");
color.setAttribute("name", "theme-color");
color.setAttribute("content", "#ffffff");
document.head.append(color2);
script("Injected Color 1/2");
