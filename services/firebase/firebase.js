// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "inventorium-c32e8.firebaseapp.com",
  projectId: "inventorium-c32e8",
  storageBucket: "inventorium-c32e8.appspot.com",
  messagingSenderId: "791004680029",
  appId: "1:791004680029:web:450e042eb554e2760322b4",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
