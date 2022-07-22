/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: "AIzaSyD9eJZcS-jZbhbSZt65OWzepOwX99jkpUM",
  authDomain: "message-buddy-e9efb.firebaseapp.com",
  databaseURL: "https://message-buddy-e9efb-default-rtdb.firebaseio.com",
  projectId: "message-buddy-e9efb",
  storageBucket: "message-buddy-e9efb.appspot.com",
  messagingSenderId: "332050796865",
  appId: "1:332050796865:web:279e3d6bc40f75b98991c0"
};

);

firebase.messaging();
