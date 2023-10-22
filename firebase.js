// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2mMsNjW8XZOsVJHmgQAcU8GyBPHzAlFw",
  authDomain: "caramel-sum-402806.firebaseapp.com",
  projectId: "caramel-sum-402806",
  storageBucket: "caramel-sum-402806.appspot.com",
  messagingSenderId: "585654154837",
  appId: "1:585654154837:web:b2724880887678c23d86dc",
  measurementId: "G-LCKC88XX7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);