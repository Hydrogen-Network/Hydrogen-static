         const switches = document.getElementById('2');
         const switche = document.getElementById('3');
         const switchy = document.getElementById('4');
         const swuthc = document.getElementById('5');

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




         
