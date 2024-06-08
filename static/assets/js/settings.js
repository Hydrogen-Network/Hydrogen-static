 // Ads
 if (localStorage.getItem("ad") === null || localStorage.getItem("ad") === "default") {
     localStorage.setItem("ad", "on")
 }

 var advDiv = document.getElementById("adv")
 if (advDiv && localStorage.getItem("ad") === "on") {
     var script = document.createElement("script")
     script.type = "text/javascript"
     script.src = "//oysterscoldtiny.com/1c/c3/8a/1cc38a6899fdf8ba4dfe779bcc54627b.js"
     advDiv.appendChild(script)
     console.log("Script inserted inside the adv div.")
 } else if (advDiv && localStorage.getItem("ad") === "off") {
     advDiv.remove()
     console.log("The adv div has been removed.")
 }

 // Dyn
 document.addEventListener('DOMContentLoaded', function() {
     function pChange(selectedValue) {
         if (selectedValue === 'uv') {
             localStorage.setItem('proxyOption', 'uv');
         } else if (selectedValue === 'dy') {
             localStorage.setItem('proxyOption', 'dy');
         } else if (selectedValue === 'aero') {
             localStorage.setItem('proxyOption', 'aero');
         }
     }

     var pChangeElement = document.getElementById('pChange')

     if (pChangeElement) {
         pChangeElement.addEventListener('change', function() {
             var selectedOption = this.value
             pChange(selectedOption)
         })

         var storedP = localStorage.getItem('uv')
         if (storedP === 'true') {
             pChangeElement.value = 'uv'
         } else if (localStorage.getItem('proxyOption') === 'dy') {
             pChangeElement.value = 'dy'
         } else {
             pChangeElement.value = 'uv'
         }
     }
 })

 const recordKeyButton = document.getElementById('recordKeyButton');
 const selectedKeyDisplay = document.getElementById('selectedKey');
 const selectedKey = localStorage.getItem('selectedKey');
 recordKeyButton.addEventListener('click', function() {
     selectedKeyDisplay.innerHTML = '<kbd>Press a key</kbd>';
     document.addEventListener('keydown', function recordKey(event) {
         const selectedKey = event.key;
         selectedKeyDisplay.innerHTML = `<kbd>${selectedKey}</kbd>`;
         localStorage.setItem('eventKey', selectedKey);
         document.removeEventListener('keydown', recordKeyButton);
     });
 });

 function searchChange(ele) {
     const selSearch = ele.value;
     localStorage.setItem('search', selSearch);

     window.location = window.location;
 }


 // Background Image
 document.addEventListener('DOMContentLoaded', function() {
     var saveButton = document.getElementById('save-button')
     saveButton.addEventListener('click', function() {
         var backgroundInput = document.getElementById('background-input')
         var imageURL = backgroundInput.value

         if (imageURL !== '') {
             localStorage.setItem('backgroundImage', imageURL)
             document.body.style.backgroundImage = "url('" + imageURL + "')"
             backgroundInput.value = ''
         } else {}
     })

     var resetButton = document.getElementById('reset-button')
     resetButton.addEventListener('click', function() {
         localStorage.removeItem('backgroundImage')
         document.body.style.backgroundImage = "url('default-background.jpg')"
     })

     var savedBackgroundImage = localStorage.getItem('backgroundImage')
     if (savedBackgroundImage) {
         document.body.style.backgroundImage = "url('" + savedBackgroundImage + "')"
     }
 })

 // AB Cloak
 function AB() {
     let inFrame

     try {
         inFrame = window !== top
     } catch (e) {
         inFrame = true
     }

     if (!inFrame && !navigator.userAgent.includes('Firefox')) {
         const popup = open('about:blank', '_blank')
         if (!popup || popup.closed) {
             alert('Please allow popups and redirects.')
         } else {
             const doc = popup.document
             const iframe = doc.createElement('iframe')
             const style = iframe.style
             const link = doc.createElement('link')

             const name = localStorage.getItem('name') || 'My Drive - Google Drive'
             const icon = localStorage.getItem('icon') || 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'

             doc.title = name
             link.rel = 'icon'
             link.href = icon

             iframe.src = location.href
             style.position = 'fixed'
             style.top = style.bottom = style.left = style.right = 0
             style.border = style.outline = 'none'
             style.width = style.height = '100%'

             doc.head.appendChild(link)
             doc.body.appendChild(iframe)

             const pLink = localStorage.getItem(encodeURI('pLink')) || 'https://www.nasa.gov/'
             location.replace(pLink)

             const script = doc.createElement('script')
             script.textContent = `
        window.onbeforeunload = function (event) {
          const confirmationMessage = 'Leave Site?';
          (event || window.event).returnValue = confirmationMessage;
          return confirmationMessage;
        };
      `
             doc.head.appendChild(script)
         }
     }
 }

 function toggleAB() {
     ab = localStorage.getItem('ab')
     if (ab == null) {
         localStorage.setItem('ab', 'false')
     } else if (ab == 'true') {
         localStorage.setItem('ab', 'false')
     } else {
         localStorage.setItem('ab', 'true')
     }
 }

 // Key 
 var eventKey = localStorage.getItem("eventKey") || "`";
 var panicLink = localStorage.getItem("panicLink") || "https://classroom.google.com/";

 document.addEventListener("keydown", function(event) {
     if (event.key === eventKey) {
         if (window.self !== window.top) {
             window.parent.window.location.replace(panicLink);
         } else {
             window.parent.window.location.replace(panicLink);
         }
     }
 });

 var eventKeyInput = document.getElementById("eventKeyInput");
 eventKeyInput.addEventListener("input", function() {
     eventKey = eventKeyInput.value;
 });

 var linkInput = document.getElementById("linkInput");
 linkInput.addEventListener("input", function() {
     panicLink = linkInput.value;
 });

 function saveEventKey() {
     eventKey = eventKeyInput.value;
     localStorage.setItem("eventKey", eventKey);
     localStorage.setItem("panicLink", panicLink);
 }

 // Tab Cloaker
 function saveName() {
     const name = document.getElementById("name").value;
     localStorage.setItem("name", name);
 }

 function saveIcon() {
     const icon = document.getElementById("icon").value;
     localStorage.setItem("icon", icon);
 }

 // Function to update favicon and title based on selected option
 function updateHeadSection(selectedValue) {
     const icon = document.getElementById("tab-favicon")
     const name = document.getElementById("tab-title")
     const selectedValue = localStorage.getItem("selectedOption")


     function setCloak(nameValue, iconUrl) {
         // Check for custom values in local storage
         const customName = localStorage.getItem("CustomName")
         const customIcon = localStorage.getItem("CustomIcon")
         // If custom values exist, use them. Otherwise, use the provided values.
         if (customName) {
             nameValue = customName
         }
         if (customIcon) {
             iconUrl = customIcon
         }

         if (iconUrl) {
             icon.setAttribute("href", iconUrl)
             localStorage.setItem("icon", iconUrl)
         }
         if (nameValue) {
             name.textContent = nameValue
             localStorage.setItem("name", nameValue)
         }
     }
     const options = {
         Google: {
             name: "Google",
             icon: "assets/img/cloaks/google.png"
         },
         Drive: {
             name: "My Drive - Google Drive",
             icon: "assets/img/cloaks/drive.png"
         },
         Classroom: {
             name: "Home",
             icon: "assets/img/cloaks/classroom.png"
         },
         Schoology: {
             name: "Home | Schoology",
             icon: "assets/img/cloaks/schoology.png"
         },
         Gmail: {
             name: "Gmail",
             icon: "assets/img/cloaks/gmail.png"
         },
         Clever: {
             name: "Clever | Portal",
             icon: "assets/img/cloaks/clever.png"
         },
         Khan: {
             name: "Dashboard | Khan Academy",
             icon: "assets/img/cloaks/khan.png"
         },
         Campus: {
             name: "Infinite Campus",
             icon: "assets/img/cloaks/campus.png"
         },
         IXL: {
             name: "IXL | Dashboard",
             icon: "assets/img/cloaks/ixl.png"
         },
         Canvas: {
             name: "Dashboard",
             icon: "assets/img/cloaks/canvas.png"
         },
         LinkIt: {
             name: "Test Taker",
             icon: "assets/img/cloaks/linkit.ico"
         },
         Edpuzzle: {
             name: "Edpuzzle",
             icon: "assets/img/cloaks/edpuzzle.png"
         },
         "i-Ready Math": {
             name: "Math To Do, i-Ready",
             icon: "assets/img/cloaks/i-ready.ico"
         },
         "i-Ready Reading": {
             name: "Reading To Do, i-Ready",
             icon: "assets/img/cloaks/i-ready.ico"
         },
         "ClassLink Login": {
             name: "Login",
             icon: "assets/img/cloaks/classlink-login.png"
         },
         "Google Meet": {
             name: "Google Meet",
             icon: "assets/img/cloaks/google-meet.png"
         },
         "Google Docs": {
             name: "Google Docs",
             icon: "assets/img/cloaks/google-docs.ico"
         },
         "Google Slides": {
             name: "Google Slides",
             icon: "assets/img/cloaks/google-slides.ico"
         },
         Wikipedia: {
             name: "Wikipedia",
             icon: "assets/img/cloaks/wikipedia.png"
         },
         Britannica: {
             name: "Encyclopedia Britannica | Britannica",
             icon: "assets/img/cloaks/britannica.png"
         },
         Ducksters: {
             name: "Ducksters",
             icon: "assets/img/cloaks/ducksters.png"
         },
         Minga: {
             name: "Minga – Creating Amazing Schools",
             icon: "assets/img/cloaks/minga.png"
         },
         "i-Ready Learning Games": {
             name: "Learning Games, i-Ready",
             icon: "assets/img/cloaks/i-ready.ico"
         },
         "NoRedInk Home": {
             name: "Student Home | NoRedInk",
             icon: "assets/img/cloaks/noredink.webp"
         },
         "Newsela Binder": {
             name: "Newsela | Binder",
             icon: "assets/img/cloaks/newsela.png"
         },
         "Newsela Assignments": {
             name: "Newsela | Assignments",
             icon: "assets/img/cloaks/newsela.png"
         },
         "Newsela Home": {
             name: "Newsela | Instructional Content Platform",
             icon: "assets/img/cloaks/newsela.png"
         },
         "PowerSchool Sign In": {
             name: "Student and Parent Sign In",
             icon: "assets/img/cloaks/powerschool.png"
         },
         "PowerSchool Grades and Attendance": {
             name: "Grades and Attendance",
             icon: "assets/img/cloaks/powerschool.png",
         },
         "PowerSchool Teacher Comments": {
             name: "Teacher Comments",
             icon: "assets/img/cloaks/powerschool.png"
         },
         "PowerSchool Standards Grades": {
             name: "Standards Grades",
             icon: "assets/img/cloaks/powerschool.png"
         },
         "PowerSchool Attendance": {
             name: "Attendance",
             icon: "assets/img/cloaks/powerschool.png"
         },
         Nearpod: {
             name: "Nearpod",
             icon: "assets/img/cloaks/nearpod.png"
         },
         StudentVUE: {
             name: "StudentVUE",
             icon: "assets/img/cloaks/studentvue.ico"
         },
         "Quizlet Home": {
             name: "Flashcards, learning tools and textbook solutions | Quizlet",
             icon: "assets/img/cloaks/quizlet.webp",
         },
         "Google Forms Locked Mode": {
             name: "Start your quiz",
             icon: "assets/img/cloaks/googleforms.png"
         },
         DeltaMath: {
             name: "DeltaMath",
             icon: "assets/img/cloaks/deltamath.png"
         },
         Kami: {
             name: "Kami",
             icon: "assets/img/cloaks/kami.png"
         },
         "GoGuardian Admin Restricted": {
             name: "Restricted",
             icon: "assets/img/cloaks/goguardian-lock.png"
         },
         "GoGuardian Teacher Block": {
             name: "Uh oh!",
             icon: "assets/img/cloaks/goguardian.png"
         },
         "World History Encyclopedia": {
             name: "World History Encyclopedia",
             icon: "assets/img/cloaks/worldhistoryencyclopedia.png",
         },
         "Big Ideas Math Assignment Player": {
             name: "Assignment Player",
             icon: "assets/img/cloaks/bim.ico"
         },
         "Big Ideas Math": {
             name: "Big Ideas Math",
             icon: "assets/img/cloaks/bim.ico"
         },
     }

     if (options[selectedValue]) {
         setCloak(options[selectedValue].name, options[selectedValue].icon)
     }
 }

 // Redirect
 function handleDropdownChange(selectElement) {
     var selectedValue = selectElement.value;
     redirectToMainDomain(selectedValue);
 }

 function redirectToMainDomain(selectedValue) {
     var currentUrl = window.location.href;
     var mainDomainUrl = currentUrl.replace(/\/[^\/]*$/, '');

     if (window != top) {
         top.location.href = mainDomainUrl;
     } else {
         window.location.href = mainDomainUrl;
     }
 }

 // Dropdown event listener
 const dropdown = document.getElementById('dropdown');
 dropdown.addEventListener('change', function() {
     const selectedValue = dropdown.value;
     updateHeadSection(selectedValue);

     // Save selected option to localStorage
     localStorage.setItem('selectedOption', selectedValue);
 });

 var themeId = localStorage.getItem("theme");
 if (themeId == "") {
     themeId = "d"
 }

 document.getElementsByClassName("td")[0].value = themeId;

 const themeDropdown = document.getElementsByClassName('td');
 dropdown.addEventListener('change', function() {
     const selectedValue = dropdown.value;

     localStorage.setItem('theme', selectedValue);

     window.location = window.location;
 });

 function themeChange(ele) {
     const selTheme = ele.value;

     localStorage.setItem('theme', selTheme);

     window.location = window.location;
 }

 function AB() {
   let inFrame;

   try {
     inFrame = window !== top;
   } catch (e) {
     inFrame = true;
   }

   if (!inFrame && !navigator.userAgent.includes("Firefox")) {
     const popup = open("about:blank", "_blank");
     if (!popup || popup.closed) {
       alert("Please allow popups and redirects.");
     } else {
       const doc = popup.document;
       const iframe = doc.createElement("iframe");
       const style = iframe.style;
       const link = doc.createElement("link");
       const name = localStorage.getItem("name") || "My Drive - Google Drive";
       const icon =
         localStorage.getItem("icon") ||
         "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
       doc.title = name;
       link.rel = "icon";
       link.href = icon;
       iframe.src = location.href;
       style.position = "fixed";
       style.top = style.bottom = style.left = style.right = 0;
       style.border = style.outline = "none";
       style.width = style.height = "100%";
       doc.head.appendChild(link);
       doc.body.appendChild(iframe);
       location.replace("https://classroom.google.com");
     }
   }
 }

 const switches = {
    'RandomBG': document.getElementById('2'),
    'v4Particles': document.getElementById('3'),
    'cursor': document.getElementById('4'),
    'clickoff_cloaking': document.getElementById('5')
  };
  
  Object.keys(switches).forEach((key) => {
    if (localStorage.getItem(key) !== '') {
      switches[key].checked = localStorage.getItem(key) === 'true';
    }
  });
  
  Object.keys(switches).forEach((key) => {
    switches[key].addEventListener('change', (event) => {
      localStorage.setItem(key, event.currentTarget.checked ? 'true' : 'false');
    });
  });
