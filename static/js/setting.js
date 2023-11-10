         let switches = document.getElementById('2');

         if(window.localStorage.getItem('v4Particles') != "") {
           if(window.localStorage.getItem('v4Particles') == "true") {
             switches.checked = true;
           }
           else {
             switches.checked = false;
           }
         }

         async function particles() {
                  switches = document.getElementById('3');
                  switches.addEventListener('change', (event) => {
                    if (event.currentTarget.checked) {
                      window.localStorage.setItem('v4Particles', 'true');
                    } else {
                      window.localStorage.setItem('v4Particles', 'false');
                    }
                  });
         }



         if(window.localStorage.getItem('RandomBG') != "") {
           if(window.localStorage.getItem('RandomBG') == "true") {
             switches.checked = true;
           }
           else {
             switches.checked = false;
           }
         }

         switches.addEventListener('change', (event) => {
           if (event.currentTarget.checked) {
             window.localStorage.setItem('RandomBG', 'true');
           } else {
             window.localStorage.setItem('RandomBG', 'false');
           }
         });
