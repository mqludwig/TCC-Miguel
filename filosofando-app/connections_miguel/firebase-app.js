//ARQUIVO COM CONFIGURAÇÕES DO APP NO FIREBASE

import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyA8h5bhsLoi1iuKL-eeCbyQsuozQPF0Tew",
    authDomain: "filosofando-ec199.firebaseapp.com",
    projectId: "filosofando-ec199",
    storageBucket: "filosofando-ec199.appspot.com",
    messagingSenderId: "625806842917",
    appId: "1:625806842917:web:1a275c3e58abafa325f3cc",
    measurementId: "G-MNB1C0KE9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}