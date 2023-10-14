// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt2P4EbQwyZ1_Z8kd2l99q-mooFTCAtwA",
  authDomain: "coffee-store-auth-bafdd.firebaseapp.com",
  projectId: "coffee-store-auth-bafdd",
  storageBucket: "coffee-store-auth-bafdd.appspot.com",
  messagingSenderId: "854530471814",
  appId: "1:854530471814:web:58b365f2245b0e891d9e07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;