// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ1bBhlz-BlLzqUpzM7L8B3ia2WHTAu0s",
  authDomain: "netflixgpt-a6703.firebaseapp.com",
  projectId: "netflixgpt-a6703",
  storageBucket: "netflixgpt-a6703.firebasestorage.app",
  messagingSenderId: "30487303565",
  appId: "1:30487303565:web:91b1e7279beb93fd1c59c4",
  measurementId: "G-6Z3DK61VY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();