const uploadForm = document.getElementById('uploadForm');
const mp3FileInput = document.getElementById('mp3File');

uploadForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const file = mp3FileInput.files[0];
  
  // Store the file in IndexedDB
  const dbName = 'songs';
  const dbVersion = 1;

  const request = window.indexedDB.open(dbName, dbVersion);

  request.onsuccess = function(event) {
    const db = event.target.result;
    const transaction = db.transaction('files', 'readwrite');
    const objectStore = transaction.objectStore('files');
    
    const fileData = {
      name: file.name,
      type: file.type,
      data: file
    };
    
    const addRequest = objectStore.add(fileData);
    
    addRequest.onsuccess = function(event) {
      console.log('File added to IndexedDB');
    };
    
    addRequest.onerror = function(event) {
      console.error('Error adding file to IndexedDB');
    };
    
    transaction.oncomplete = function(event) {
      db.close();
    };
  };
  
  request.onerror = function(event) {
    console.error('Error opening IndexedDB');
  };
  
  // Clear the file input value
  mp3FileInput.value = '';
});

const dbName = 'myDatabase';
const dbVersion = 1;
const objectStoreName = 'files';

const request = window.indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = function(event) {
  const db = event.target.result;

  if (!db.objectStoreNames.contains(objectStoreName)) {
    db.createObjectStore(objectStoreName, { keyPath: 'id', autoIncrement: true });
  }
};

request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction(objectStoreName, 'readwrite');
  const objectStore = transaction.objectStore(objectStoreName);
  
  const fileData = {
    name: file.name,
    type: file.type,
    data: file
  };
  
  const addRequest = objectStore.add(fileData);
  
  addRequest.onsuccess = function(event) {
    console.log('File added to IndexedDB');
  };
  
  addRequest.onerror = function(event) {
    console.error('Error adding file to IndexedDB');
  };
  
  transaction.oncomplete = function(event) {
    db.close();
  };
};

request.onerror = function(event) {
  console.error('Error opening IndexedDB');
};
