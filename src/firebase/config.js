// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEDaD5A-p0WsMovwC72b7JHnumiggFDYg",
  authDomain: "pokestore-e-commerce-demo.firebaseapp.com",
  projectId: "pokestore-e-commerce-demo",
  storageBucket: "pokestore-e-commerce-demo.appspot.com",
  messagingSenderId: "709670405854",
  appId: "1:709670405854:web:72eb856b82eb9c1d03e44f",
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
