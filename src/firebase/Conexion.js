import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuCnUY0o-HrOXFwfMup5rKQc_1ZTeNFV0",
  authDomain: "proyecto-api-dfeaf.firebaseapp.com",
  projectId: "proyecto-api-dfeaf",
  storageBucket: "proyecto-api-dfeaf.appspot.com",
  messagingSenderId: "115039360347",
  appId: "1:115039360347:web:47b1300c24d296eb49b67e",
  measurementId: "G-E24RE13PJ7"
};

const appFirebase = initializeApp(firebaseConfig); // Primero inicializa appFirebase

const auth = getAuth(appFirebase); // Luego obtén el objeto auth
const db = getFirestore(appFirebase);

export { appFirebase, auth, db };
