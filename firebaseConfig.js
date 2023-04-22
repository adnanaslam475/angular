// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMsNj3Ymu74XW9MO4pgjX9k1atmHSfO64",
  authDomain: "reactpwa-2a98d.firebaseapp.com",
  databaseURL: "https://reactpwa-2a98d-default-rtdb.firebaseio.com",
  projectId: "reactpwa-2a98d",
  storageBucket: "reactpwa-2a98d.appspot.com",
  messagingSenderId: "679472623547",
  appId: "1:679472623547:web:3eb02527f5ed5e11c91e9e",
  measurementId: "G-9BTSLHLNHG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
