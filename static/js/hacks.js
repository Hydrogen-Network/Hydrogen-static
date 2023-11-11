let iframe = document.getElementById('game-frame');



function retroBowlhack() {
    function updateLocalStorage(key, newValue) { 
        let savedata = document.getElementById('game-frame').localStorage.getItem('RetroBowl.0.savedata.ini'); 
        let lines = savedata.split('\n'); 
        for (let i = 0; i < lines.length; i++) { 
            let line = lines[i]; 
            if (line.startsWith(key + '=')) { 
                lines[i] = key + '=' + `"${newValue}"`; 
                break; 
            } 
        } 
        savedata = lines.join('\n'); 
        document.getElementById('game-frame').localStorage.setItem('RetroBowl.0.savedata.ini', savedata); 
    } 
    let tokens = prompt('Enter your coach credit token amount:'); 
    updateLocalStorage('coach_credit', tokens);
    alert("Now refresh and your credits will be there.")
}
