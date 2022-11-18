// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAO9tWDOONwCvGJ_qL-bmowvAg_K0U4-ag",
    authDomain: "tefiti.firebaseapp.com",
    projectId: "tefiti",
    storageBucket: "tefiti.appspot.com",
    messagingSenderId: "809521971293",
    appId: "1:809521971293:web:9b1437ff309e8db5930db4"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);