// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1N_36HnmNICf6AQvV-FhP0M0xR4_de58",
  authDomain: "molecule-housing-market.firebaseapp.com",
  projectId: "molecule-housing-market",
  storageBucket: "molecule-housing-market.appspot.com",
  messagingSenderId: "238580487723",
  appId: "1:238580487723:web:fefb92fbb1dcdcac717c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()