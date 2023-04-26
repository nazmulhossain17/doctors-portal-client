// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtgMHAn0soujb6Hoc-lUXAOY4uciRl3i4",
  authDomain: "doctors-portal-283c0.firebaseapp.com",
  projectId: "doctors-portal-283c0",
  storageBucket: "doctors-portal-283c0.appspot.com",
  messagingSenderId: "56732308360",
  appId: "1:56732308360:web:cf78c75973ac81143fe03d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;