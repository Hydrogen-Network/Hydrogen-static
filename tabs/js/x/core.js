const proxyOption = localStorage.getItem('proxyOption');
const pluginUrls = JSON.parse(localStorage.getItem('websitePlugins')) || [];

pluginUrls.forEach(pluginUrl => {
  const script = document.createElement('script');

    if (proxyOption && proxyOption.toLowerCase() === 'dy') {
      script.src = `${window.location.origin}/service/dynamic/${pluginUrl}`;
    } else if (proxyOption && proxyOption.toLowerCase() === 'uv') {
      script.src = `${window.location.origin}/service/uv/${pluginUrl}`;
    }

  document.head.appendChild(script);
  console.log(`Plugin injected into the main page: ${pluginUrl}`);
});
