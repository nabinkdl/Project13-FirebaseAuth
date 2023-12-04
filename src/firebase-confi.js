
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAxUCPouM4mc8iGt6cP-AFIb8Uf2EkGMzs",
  authDomain: "fir-auth-fd3c6.firebaseapp.com",
  projectId: "fir-auth-fd3c6",
  storageBucket: "fir-auth-fd3c6.appspot.com",
  messagingSenderId: "313703120129",
  appId: "1:313703120129:web:4a36fc915ff63adfb1ef00",
  measurementId: "G-B6R6LKLZKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)