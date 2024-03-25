// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-b-82500.firebaseapp.com",
  projectId: "mern-b-82500",
  storageBucket: "mern-b-82500.appspot.com",
  messagingSenderId: "392466611422",
  appId: "1:392466611422:web:8383c377915bb3a41d964f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
