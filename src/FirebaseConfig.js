// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByXZXn6WbjlofCVMA5K6HaabEeV_hbcv8",
  authDomain: "education-erp-system-4cb96.firebaseapp.com",
  projectId: "education-erp-system-4cb96",
  storageBucket: "education-erp-system-4cb96.firebasestorage.app",
  messagingSenderId: "583285764926",
  appId: "1:583285764926:web:aff901ba3ebf81d532f26f",
  measurementId: "G-B64W08H7RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);