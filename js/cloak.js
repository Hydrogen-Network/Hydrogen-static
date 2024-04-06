
    let originalTitle = document.getElementById('dynamic-title').href;
    let originalFavicon = document.getElementById('dynamic-favicon').href;

    function handleVisibilityChange() {
     if (localStorage.getItem('clickoff_cloaking') === 'true') {
       if (document.hidden) {
         document.title = "Google";
         document.querySelector("link[rel*='icon']").href = "https://raw.githubusercontent.com/whitespider-dev/whitespider/Main/res/google.ico";
       } else {
          document.title = "Hydrogen";
          document.getElementById('dynamic-favicon').href = originalFavicon;
        }
       }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
