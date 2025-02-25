// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW0Z97ZChBMuuqphEVkFkR7QAzUQA2RCQ",
  authDomain: "taskburrow.firebaseapp.com",
  projectId: "taskburrow",
  storageBucket: "taskburrow.firebasestorage.app",
  messagingSenderId: "228785127274",
  appId: "1:228785127274:web:80ea593ca2a0ad57916f13",
  measurementId: "G-BM5VPQB4H9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
