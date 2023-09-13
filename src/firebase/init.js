
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBH2y2181BxFP4oW5YbXwXsVUz2-iExc44",
  authDomain: "arbregenealo-3e955.firebaseapp.com",
  projectId: "arbregenealo-3e955",
  storageBucket: "arbregenealo-3e955.appspot.com",
  messagingSenderId: "449597146792",
  appId: "1:449597146792:web:b206c85a3a92a54477a49d",
  measurementId: "G-XTE025NF9L",
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;