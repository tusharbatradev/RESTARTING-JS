// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjajFufifP7P-nd0IObeeTqo02UbzNNcQ",
  authDomain: "netflixgpt-f0dbd.firebaseapp.com",
  projectId: "netflixgpt-f0dbd",
  storageBucket: "netflixgpt-f0dbd.firebasestorage.app",
  messagingSenderId: "126582120468",
  appId: "1:126582120468:web:5cbc35ab468cb9c6530701",
  measurementId: "G-SRV7VLLD15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();