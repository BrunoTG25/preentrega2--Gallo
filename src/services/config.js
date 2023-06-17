import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "proyecto-gamming.firebaseapp.com",
  projectId: "proyecto-gamming",
  storageBucket: "proyecto-gamming.appspot.com",
  messagingSenderId: "164388045429",
  appId: "1:164388045429:web:50577900c53c2c92a56e3c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)