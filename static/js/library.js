const uploadForm = document.getElementById('uploadForm');
const mp3FileInput = document.getElementById('mp3File');

uploadForm.addEventListener('submit', function(event) {
  event.preventDefault();
    
  console.log(mp3FileInput.files[0])
  // Store the file in localStorage
  localStorage.setItem('mp3File', mp3FileInput.files[0]);
  
  // Clear the file input value
  mp3FileInput.value = '';
  // Retrieve the file from localStorage
const file = localStorage.getItem('mp3File');

if (file) {
  const audioPlayer = document.getElementById('audioPlayer');
  var binaryData = [];
  binaryData.push(file);
  audioPlayer.srcObject = URL.createObjectURL(new Blob(binaryData, {type: "audio/mp3"}));
}

});

// Retrieve the file from localStorage
const file = localStorage.getItem('mp3File');

if (file) {
  const audioPlayer = document.getElementById('audioPlayer');
  var binaryData = [];
  binaryData.push(file);
  audioPlayer.srcObject = URL.createObjectURL(new Blob(binaryData, {type: "audio/mp3"}));
}
