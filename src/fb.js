// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC0waBdTwxIgUbOrh7ub9P63Bt5d8lvzM",
  authDomain: "todo-vuetify-55886.firebaseapp.com",
  projectId: "todo-vuetify-55886",
  storageBucket: "todo-vuetify-55886.appspot.com",
  messagingSenderId: "696437145911",
  appId: "1:696437145911:web:368007d91c0696e730dab2",
  measurementId: "G-CJ8P9MZZVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const timestamp = serverTimestamp();

export { timestamp, db };
