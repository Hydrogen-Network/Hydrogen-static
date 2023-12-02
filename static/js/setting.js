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




         
