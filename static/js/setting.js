         let switches = document.getElementById('2');

         if(localStorage.getItem('v4Particles') != "") {
           if(localStorage.getItem('v4Particles') == "true") {
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
                      localStorage.setItem('v4Particles', 'true');
                    } else {
                      localStorage.setItem('v4Particles', 'false');
                    }
                  });
         }



         if(localStorage.getItem('RandomBG') != "") {
           if(localStorage.getItem('RandomBG') == "true") {
             switches.checked = true;
           }
           else {
             switches.checked = false;
           }
         }

         switches.addEventListener('change', (event) => {
           if (event.currentTarget.checked) {
             localStorage.setItem('RandomBG', 'true');
           } else {
             localStorage.setItem('RandomBG', 'false');
           }
         });





         if(localStorage.getItem('cursor') != "") {
           if(localStorage.getItem('cursor') == "true") {
             switches.checked = true;
           }
           else {
             switches.checked = false;
           }
         }


         async function cursor() {
                  switches = document.getElementById('4');
                  switches.addEventListener('change', (event) => {
                    if (event.currentTarget.checked) {
                      localStorage.setItem('cursor', 'true');
                    } else {
                      localStorage.setItem('cursor', 'false');
                    }
                  });         
         }





         if(localStorage.getItem('clickoff_cloaking') != "") {
           if(localStorage.getItem('clickoff_cloaking') == "true") {
             switches.checked = true;
           }
           else {
             switches.checked = false;
           }
         }

         async function clickofflcloak() {
                  switches = document.getElementById('5');
                  switches.addEventListener('change', (event) => {
                    if (event.currentTarget.checked) {
                      localStorage.setItem('clickoff_cloaking', 'true');
                    } else {
                      localStorage.setItem('clickoff_cloaking', 'false');
                    }
                  });         
         }
