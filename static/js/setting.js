         const switches2 = document.getElementById('3');

         if(window.localStorage.getItem('v4Particles') != "") {
           if(window.localStorage.getItem('v4Particles') == "true") {
             switches2.checked = true;
           }
           else {
             switches2.checked
           }
         }

         switches2.addEventListener('change', (event) => {
           if (event.currentTarget.checked) {
             window.localStorage.setItem('v4Particles', 'true');
           } else {
             window.localStorage.setItem('v4Particles', 'false');
           }
         });
