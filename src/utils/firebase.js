// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACo18VM5PdjCYm8R9mqGgyYvAdqCx5xWg",
  authDomain: "netflixgpt-2ed96.firebaseapp.com",
  projectId: "netflixgpt-2ed96",
  storageBucket: "netflixgpt-2ed96.firebasestorage.app",
  messagingSenderId: "138948684581",
  appId: "1:138948684581:web:eaac7e85479696acba88cc",
  measurementId: "G-Z1Z4HC33RW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
