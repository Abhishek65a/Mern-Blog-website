// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b54f3.firebaseapp.com",
  projectId: "mern-blog-b54f3",
  storageBucket: "mern-blog-b54f3.appspot.com",
  messagingSenderId: "725023622432",
  appId: "1:725023622432:web:274ed804b00c42a16b4345"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);