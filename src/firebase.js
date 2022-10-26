// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpQZGiTeZBDvok7Ge7U5cdYJ_8VyDr7oo",
  authDomain: "transport-app-9e9bc.firebaseapp.com",
  projectId: "transport-app-9e9bc",
  storageBucket: "transport-app-9e9bc.appspot.com",
  messagingSenderId: "182179262209",
  appId: "1:182179262209:web:03f4c6fa84ca521e203500",
  measurementId: "G-16LQM7T2F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;