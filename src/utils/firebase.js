// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.firebase,
  authDomain: "blog-25116.firebaseapp.com",
  projectId: "blog-25116",
  storageBucket: "blog-25116.appspot.com",
  messagingSenderId: "254101247083",
  appId: "1:254101247083:web:2f81adb5b5e4c301410d2e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
