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
    var themeid = localStorage.getItem("theme");
    //Loads theme
    themeEle = document.createElement("link");
    themeEle.rel="stylesheet";
    if(themeid == "b") {
        themeEle.href = "../css/themes/bannana.css";
    }
    if(themeid == "bg") {
        themeEle.href = "../css/themes/blue-green.css";
    }
    if(themeid == "cr") {
        themeEle.href = "../css/themes/cherryRed.css";
    }
    if(themeid == "d") {
        themeEle.href = "../css/themes/dark.css";
    }
    if(themeid == "fg") {
        themeEle.href = "../css/themes/forestGreen.css";
    }
    if(themeid == "l") {
        themeEle.href = "../css/themes/light.css";
    }
    if(themeid == "m") {
        themeEle.href = "../css/themes/milkshake.css";
    }
    if(themeid == "nb") {
        themeEle.href = "../css/themes/nightBlue.css";
    }
    if(themeid == "rb") {
        themeEle.href = "../css/themes/red-black.css";
    }
    if(themeid == "s") {
        themeEle.href = "../css/themes/sunset.css";
    }
    if(themeid == "l4") {
        themeEle.href = "../css/themes/legacy.css";
    }
    document.body.appendChild(themeEle);
});
