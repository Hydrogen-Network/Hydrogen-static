let iframe = document.getElementById('game-frame');

if(iframe.src = "https://thelandofreading.com/src/static/games/retro-bowl/index.html") {
  function updateLocalStorage(key, newValue) { 
        let savedata = iframe.localStorage.getItem('RetroBowl.0.savedata.ini'); 
        let lines = savedata.split('\n'); 
        for (let i = 0; i < lines.length; i++) { 
            let line = lines[i]; 
            if (line.startsWith(key + '=')) { 
                lines[i] = key + '=' + `"${newValue}"`; 
                break; 
            } 
        } 
        savedata = lines.join('\n'); 
        iframe.localStorage.setItem('RetroBowl.0.savedata.ini', savedata); 
    } 
    let tokens = prompt('Enter your coach credit token amount:'); 
    updateLocalStorage('coach_credit', tokens);
    location.reload();
}
