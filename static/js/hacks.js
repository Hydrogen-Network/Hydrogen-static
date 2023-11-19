function hacks(name) {
    name();
}

async function retroBowl() {
    function updateLocalStorage(key, newValue) { 
        let savedata = localStorage.getItem('RetroBowl.0.savedata.ini'); 
        let lines = savedata.split('\n'); 
        for (let i = 0; i < lines.length; i++) { 
            let line = lines[i]; 
            if (line.startsWith(key + '=')) { 
                lines[i] = key + '=' + `"${newValue}"`; 
                break; 
            } 
        } 
        savedata = lines.join('\n'); 
        localStorage.setItem('RetroBowl.0.savedata.ini', savedata); 
    } 
    let tokens = prompt('Enter your coach credit token amount:'); 
    updateLocalStorage('coach_credit', tokens);
    alert("Now refresh and your credits will be there.")
}

function vexSix() {
    let vex6_sg = JSON.parse(localStorage.getItem('vex6_sg'));

    let newValue = prompt('Enter your new amount of Coins:');

    vex6_sg.stats.tm = Number(newValue);

    localStorage.setItem('vex6_sg', JSON.stringify(vex6_sg));

    alert("Now refresh Hydrogen and your vex 6 coins will be set!")
}

function monkeyMart() {
    let mart_sg = JSON.parse(localStorage.getItem('monkeymart_config'));

    let newValue = prompt('Enter your new amount of Coins:');

    mart_sg.coins = Number(newValue);

    localStorage.setItem('monkeymart_config', JSON.stringify(vex6_sg));

    alert("Now refresh Hydrogen and your vex 6 coins will be set!");
}

function templeRunTwo() {
    let storage = JSON.parse(localStorage.getItem('TR2_GAME_STATE'));

    let newValue = prompt('Enter your new amount of Coins:');

    storage.statsData.totalCoins = Number(newValue);

    localStorage.setItem('TR2_GAME_STATE', JSON.stringify(storage));

    alert("Now refresh Hydrogen and your coins will be set!")
}

function bobTheRobberTwo() {
    let newValue = prompt('Enter your new amount of Money:');

    localStorage.setItem('totalMoneyBOB2Robb3r', newValue)

    alert("Now refresh Hydrogen and your money in Bob The Robber 2 will be set!")
}

function cookieClicker() {
    alert("Click somewhere on the screen and then press the 'h' key to open the hack menu!")
}

function jetPackJoyride() {
    let storage = JSON.parse(localStorage.getItem('data'));

    let newValue = prompt('Enter your new amount of Coins:');

    if (storage && typeof storage.coin !== 'undefined') {
        storage.coin = Number(newValue);
        localStorage.setItem('data', JSON.stringify(storage));
        alert("Now refresh Hydrogen and your coins will be set!");
    } else {
        alert("Error: JetPackJoyride game state not found or is corrupted!");
    }
}

function eggyCar() {
    let newValue = prompt('Enter your new amount of Eggy Cart coins:');

    if (newValue === null) {
        return;
    }

    newValue = parseInt(newValue);

    const openRequest = indexedDB.open('localforage');

    openRequest.onupgradeneeded = function() {
        const db = openRequest.result;
        if (!db.objectStoreNames.contains('keyvaluepairs')) {
            db.createObjectStore('keyvaluepairs');
        }
    };

    openRequest.onerror = function() {
        console.error("Error", openRequest.error);
    };

    openRequest.onsuccess = function() {
        const db = openRequest.result;

        const transaction = db.transaction('keyvaluepairs', 'readwrite');
        const store = transaction.objectStore('keyvaluepairs');
        store.put(newValue, 'eggcar_coins');

        transaction.oncomplete = function() {
            alert("Now refresh Hydrogen and your Egg Cart coins will be set!");
        };

        transaction.onerror = function() {
            console.log('Transaction not opened due to error:', transaction.error);
        };
    };
}

function subwaySurfers() {
    let Subway_sg = JSON.parse(localStorage.getItem('GameSettings'));

    let newValue = prompt('Enter your new amount of Coins:');

    Subway_sg.coins = Number(newValue);

    localStorage.setItem('GameSettings', JSON.stringify(Subway_sg));

    alert("Now refresh Hydrogen and your coins will be set!")
}
