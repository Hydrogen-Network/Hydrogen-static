// Ads
document.addEventListener('DOMContentLoaded', function () {
  function adChange(selectedValue) {
    if (selectedValue === 'default') {
      localStorage.setItem('ad', 'on')
    } else if (selectedValue === 'off') {
      localStorage.setItem('ad', 'off')
    }
  }

  var adTypeElement = document.getElementById('adType')

  if (adTypeElement) {
    adTypeElement.addEventListener('change', function () {
      var selectedOption = this.value
      adChange(selectedOption)
    })

    var storedAd = localStorage.getItem('ad')
    if (storedAd === 'on') {
      adTypeElement.value = 'default'
    } else if (storedAd === 'off') {
      adTypeElement.value = 'off'
    } else {
      adTypeElement.value = 'default'
    }
  }
  const iconElement = document.getElementById('icon')
  const nameElement = document.getElementById('name')
  const customIcon = localStorage.getItem('CustomIcon')
  const customName = localStorage.getItem('CustomName')
  iconElement.value = customIcon
  nameElement.value = customName

  localStorage.setItem('ab', true)
  document.getElementById('ab-settings-switch').checked = true
})

// Dyn
document.addEventListener('DOMContentLoaded', function () {
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
    pChangeElement.addEventListener('change', function () {
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
recordKeyButton.addEventListener('click', function () {
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
document.addEventListener('DOMContentLoaded', function () {
  var saveButton = document.getElementById('save-button')
  saveButton.addEventListener('click', function () {
    var backgroundInput = document.getElementById('background-input')
    var imageURL = backgroundInput.value

    if (imageURL !== '') {
      localStorage.setItem('backgroundImage', imageURL)
      document.body.style.backgroundImage = "url('" + imageURL + "')"
      backgroundInput.value = ''
    } else {
    }
  })

  var resetButton = document.getElementById('reset-button')
  resetButton.addEventListener('click', function () {
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
    const icon = document.getElementById('dynamic-favicon');
    const name = document.getElementById('dynamic-title');
    
    if (selectedValue === 'Google') {
        icon.setAttribute('href', '/img/cloaks/google.png');
        name.textContent = 'Google';
        localStorage.setItem("name", "Google");
        localStorage.setItem("icon", "/img/cloaks/google.png");
    } 
    else if (selectedValue === 'Drive') {
        icon.setAttribute('href', '/img/cloaks/drive.png');
        name.textContent = 'My Drive - Google Drive';
        localStorage.setItem("name", "My Drive - Google Drive");
        localStorage.setItem("icon", "/img/cloaks/drive.png");
    } 
    else if (selectedValue === 'Classroom') {
        icon.setAttribute('href', '/img/cloaks/classroom.png');
        name.textContent = 'Classes';
        localStorage.setItem("name", "Classes");
        localStorage.setItem("icon", "/img/cloaks/classroom.png");
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
if(themeId=="") {themeId="d"}

document.getElementsByClassName("td")[0].value = themeId;

const themeDropdown = document.getElementsByClassName('td');
dropdown.addEventListener('change', function() {
    const selectedValue = dropdown.value;

    localStorage.setItem('theme', selectedValue);

    window.location=window.location;
});

function themeChange(ele) {
  const selTheme = ele.value;

  localStorage.setItem('theme', selTheme);

  window.location=window.location;
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
                    const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
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
