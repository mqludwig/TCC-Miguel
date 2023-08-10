// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//const analytics = getAnalytics(app);

const auth = getAuth(app); //Add

export {
    auth
}