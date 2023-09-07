// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz89fCCYHfprALTd79EFz2yAk9c6K-0sA",
  authDomain: "chat-app-34856.firebaseapp.com",
  projectId: "chat-app-34856",
  storageBucket: "chat-app-34856.appspot.com",
  messagingSenderId: "830230878270",
  appId: "1:830230878270:web:fe7af8e234ca45c821996f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)