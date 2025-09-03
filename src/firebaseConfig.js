// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp2MDIC3b2L48t1ZbOdI2tWTvLEgqWtAM",
  authDomain: "netflixgpt-95405.firebaseapp.com",
  projectId: "netflixgpt-95405",
  storageBucket: "netflixgpt-95405.firebasestorage.app",
  messagingSenderId: "336502859222",
  appId: "1:336502859222:web:331d0c33401e64c1d3f077",
  measurementId: "G-4VZC8CC3LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);