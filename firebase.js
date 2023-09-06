import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHI0GxxjNA3O1kww-eXur7nV__OBDtjP4",
  authDomain: "paylify.firebaseapp.com",
  projectId: "paylify",
  storageBucket: "paylify.appspot.com",
  messagingSenderId: "258096105300",
  appId: "1:258096105300:web:5446010e44078d4fb9eac1",
  measurementId: "G-BQNPGLQ6BB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);