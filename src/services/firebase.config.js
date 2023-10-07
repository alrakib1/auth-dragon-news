// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcfekl35enRIBHuerP9pM3a9g9BGk5gq4",
  authDomain: "auth-dragon-news-react.firebaseapp.com",
  projectId: "auth-dragon-news-react",
  storageBucket: "auth-dragon-news-react.appspot.com",
  messagingSenderId: "40675743266",
  appId: "1:40675743266:web:63c6f219aa8f58f54d5c7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
