


import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBDgBVmW8Myzd9wJm9WoPVclL9cuS9OENM",
    authDomain: "todo-app-56a32.firebaseapp.com",
    projectId: "todo-app-56a32",
    storageBucket: "todo-app-56a32.appspot.com",
    messagingSenderId: "677028357844",
    appId: "1:677028357844:web:bc5ed8d0e0ca1f9f57fd41",
    measurementId: "G-64G18YP815"
});

const db=firebaseApp.firestore();

export default db;