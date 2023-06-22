// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfjACRdCVsmBv3Nc9VPEOhp0XmJ8pinls",
  authDomain: "react-journal-app-11703.firebaseapp.com",
  projectId: "react-journal-app-11703",
  storageBucket: "react-journal-app-11703.appspot.com",
  messagingSenderId: "441423787171",
  appId: "1:441423787171:web:cad24e8dc95f527151fb16"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)