const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyAyeMUmndgBl_AR-eWmnSE-_ifhb38omyM",
    authDomain: "fir-test-42ed5.firebaseapp.com",
    projectId: "fir-test-42ed5",
    storageBucket: "fir-test-42ed5.firebasestorage.app",
    messagingSenderId: "938912666907",
    appId: "1:938912666907:web:79c2cba7a4a673955eefbe",
    measurementId: "G-ZNKCCEXDTH"
};



firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const col2 = db.collection("story");
module.exports = col2;