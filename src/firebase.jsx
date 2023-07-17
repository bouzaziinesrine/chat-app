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
  apiKey: "AIzaSyDFDYLM0irAxbAgLBhzkbQ1a8KdQQaTI5s",
  authDomain: "chat-app-dc04e.firebaseapp.com",
  projectId: "chat-app-dc04e",
  storageBucket: "chat-app-dc04e.appspot.com",
  messagingSenderId: "11532195052",
  appId: "1:11532195052:web:dd10951d5b503709e741c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)