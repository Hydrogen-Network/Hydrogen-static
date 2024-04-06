         const switches = document.getElementById('2');


         if (localStorage.getItem('RandomBG') != "") {
             if (localStorage.getItem('RandomBG') == "true") {
                 switches.checked = true;
             } else {
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




         
   const switche = document.getElementById('3');
         const switchy = document.getElementById('4');
         const swuthc = document.getElementById('5');
   if (localStorage.getItem('v4Particles') != "") {
             if (localStorage.getItem('v4Particles') == "true") {
                 switche.checked = true;
             } else {
                 switche.checked = false;
             }
         }

         switche.addEventListener('change', (event) => {
             if (event.currentTarget.checked) {
                 localStorage.setItem('v4Particles', 'true');
             } else {
                 localStorage.setItem('v4Particles', 'false');
             }
         });

         if (localStorage.getItem('cursor') != "") {
             if (localStorage.getItem('cursor') == "true") {
                 switchy.checked = true;
             } else {
                 switchy.checked = false;
             }
         }

         switchy.addEventListener('change', (event) => {
             if (event.currentTarget.checked) {
                 localStorage.setItem('cursor', 'true');
             } else {
                 localStorage.setItem('cursor', 'false');
             }
         });




         if (localStorage.getItem('clickoff_cloaking') != "") {
             if (localStorage.getItem('clickoff_cloaking') == "true") {
                 swuthc.checked = true;
             } else {
                 swuthc.checked = false;
             }
         }

         swuthc.addEventListener('change', (event) => {
             if (event.currentTarget.checked) {
                 localStorage.setItem('clickoff_cloaking', 'true');
             } else {
                 localStorage.setItem('clickoff_cloaking', 'false');
             }
         });
