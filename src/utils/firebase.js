// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwWP9Cevh5-Wk_n4YUD5mRKbUXeXYqSJw",
  authDomain: "netflix-gpt-a7aed.firebaseapp.com",
  projectId: "netflix-gpt-a7aed",
  storageBucket: "netflix-gpt-a7aed.firebasestorage.app",
  messagingSenderId: "808358895654",
  appId: "1:808358895654:web:e67f17c75debd85e86c6e7",
  measurementId: "G-Q5YZND82CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
export const auth = getAuth();
