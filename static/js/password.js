
function password() {
    if (!localStorage.getItem('password')) {
        passwordPrompt();
    }
}

function passwordKeybinds() {
    document.addEventListener('keydown', function (e) {
        //alt L
        if (e.altKey && e.key === 'l') {
            passwordLock();
        }
    }); 
    console.log("Password Keybind initalized");
}

function passwordPrompt() {
  localStorage.setItem('password', prompt("Password:"))
}
function passwordLock() {

}
