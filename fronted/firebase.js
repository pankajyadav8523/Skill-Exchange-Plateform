// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIhTcCzocbJHZXTGPPr9ql7dUcg5aID68",
  authDomain: "skill-management-8bff5.firebaseapp.com",
  projectId: "skill-management-8bff5",
  storageBucket: "skill-management-8bff5.firebasestorage.app",
  messagingSenderId: "235810284332",
  appId: "1:235810284332:web:b1584ec397db2fd6a08289",
  measurementId: "G-16Q2S70E3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
