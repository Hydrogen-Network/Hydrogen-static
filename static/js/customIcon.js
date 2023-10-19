//Loads custom icons

document.addEventListener("DOMContentLoaded", function(event) { 
    const icon = document.getElementById('dynamic-favicon');
    const name = document.getElementById('dynamic-title');
    var selectedValue = localStorage.getItem("selectedOption");
    if (selectedValue === 'Google') {
        icon.setAttribute('href', '/static/img/cloaks/google.png');
        name.textContent = 'Google';
        localStorage.setItem("name", "Google");
        localStorage.setItem("icon", "/static/img/cloaks/google.png");
    } 
    else if (selectedValue === 'Drive') {
        icon.setAttribute('href', '/static/img/cloaks/drive.png');
        name.textContent = 'My Drive - Google Drive';
        localStorage.setItem("name", "My Drive - Google Drive");
        localStorage.setItem("icon", "/static/img/cloaks/drive.png");
    } 
    else if (selectedValue === 'Classroom') {
        icon.setAttribute('href', '/static/img/cloaks/classroom.png');
        name.textContent = 'Classes';
        localStorage.setItem("name", "Classes");
        localStorage.setItem("icon", "/static/img/cloaks/classroom.png");
    }
    else if (selectedValue === 'Schoology') {
        icon.setAttribute('href', '/static/img/cloaks/schoology.png');
        name.textContent = 'Home | Schoology';
        localStorage.setItem("name", "Home | Schoology");
        localStorage.setItem("icon", "/static/img/cloaks/schoology.png");
    }
    else if (selectedValue === 'Gmail') {
        icon.setAttribute('href', '/static/img/cloaks/gmail.png');
        name.textContent = 'Gmail';
        localStorage.setItem("name", "Gmail");
        localStorage.setItem("icon", "/static/img/cloaks/gmail.png");
    }
    else if (selectedValue === 'Clever') {
        icon.setAttribute('href', '/static/img/cloaks/clever.png');
        name.textContent = 'Clever | Portal';
        localStorage.setItem("name", "Clever | Portal");
        localStorage.setItem("icon", "/static/img/cloaks/clever.png");
    }
    else if (selectedValue === 'Khan') {
        icon.setAttribute('href', '/static/img/cloaks/khan.png');
        name.textContent = 'Dashboard | Khan Academy';
        localStorage.setItem("name", "Dashboard | Khan Academy");
        localStorage.setItem("icon", "/static/img/cloaks/khan.png");
    }
    else if (selectedValue == 'Hydro') {
        icon.setttribute('href', '/static/img/gas.png');
        name.textContent = 'Hydrogen';
        localStorage.setItem("name", "Hydrogen");
        localStorage.setItem("icon", "/static/gas.png");
    }
    var themeid = localStorage.getItem("theme");
    //Loads theme
    themeEle = document.createElement("link");
    themeEle.rel="stylesheet";
    if(themeid == "b") {
        themeEle.href = "/static/css/themes/bannana.css";
    }
    if(themeid == "bg") {
        themeEle.href = "/static/css/themes/blue-green.css";
    }
    if(themeid == "cr") {
        themeEle.href = "/static/css/themes/cherryRed.css";
    }
    if(themeid == "fg") {
        themeEle.href = "/static/css/themes/forestGreen.css";
    }
    if(themeid == "l") {
        themeEle.href = "/static/css/themes/light.css";
    }
    if(themeid == "m") {
        themeEle.href = "/static/css/themes/milkshake.css";
    }
    if(themeid == "nb") {
        themeEle.href = "/static/css/themes/nightBlue.css";
    }
    if(themeid == "rb") {
        themeEle.href = "/static/css/themes/red-black.css";
    }
    if(themeid == "s") {
        themeEle.href = "/static/css/themes/sunset.css";
    }
    if(themeid == "l4") {
        themeEle.href = "/static/index.css";
    }
    document.body.appendChild(themeEle);

    var searchid = localStorage.getItem("search");
    //changes search engine
    themeEle = document.createElement("script");
    if(searchid == "g") {
        themeEle.innerHTML = "document.getElementById('uv-search-engine').value = 'https://www.google.com/search?q=%s';";
    }
    if(searchid == "b") {
        themeEle.innerHTML = "document.getElementById('uv-search-engine').value = 'https://www.bing.com/search?form=&q=%s';";
    }
    if(searchid == "ddg") {
        themeEle.innerHTML = "document.getElementById('uv-search-engine').value = 'https://duckduckgo.com/?q=%s';";
    }
    if(searchid == "br") {
        themeEle.innerHTML = "document.getElementById('uv-search-engine').value = 'https://search.brave.com/search?q=%s';";
    }
    document.body.appendChild(themeEle);
});
