// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGztxYgY_KWbKjU_Ujw64Wlq9a2v0wmfk",
  authDomain: "mobile-5b518.firebaseapp.com",
  projectId: "mobile-5b518",
  storageBucket: "mobile-5b518.appspot.com",
  messagingSenderId: "435265613337",
  appId: "1:435265613337:web:01f6aa39c194d93f348488"
};

// Initialize Firebase
export  const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH =getAuth(FIREBASE_APP)