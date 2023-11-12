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





         if(window.localStorage.getItem('cursor') != "") {
           if(window.localStorage.getItem('cursor') == "true") {
             switches.checked = true;
           }
           else {
             switches.checked = false;
           }
         }


         async function cursor() {
                  switches.addEventListener('change', (event) => {
                    if (event.currentTarget.checked) {
                      window.localStorage.setItem('cursor', 'true');
                    } else {
                      window.localStorage.setItem('cursor', 'false');
                    }
                  });         
         }





         if(window.localStorage.getItem('clickoff_cloaking') != "") {
           if(window.localStorage.getItem('clickoff_cloaking') == "true") {
             switches.checked = true;
           }
           else {
             switches.checked = false;
           }
         }

         async function clickofflcloak() {
                  switches.addEventListener('change', (event) => {
                    if (event.currentTarget.checked) {
                      window.localStorage.setItem('clickoff_cloaking', 'true');
                    } else {
                      window.localStorage.setItem('clickoff_cloaking', 'false');
                    }
                  });         
         }
