import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFZ8JjwcBsNbCQw8bqO8fQLBLJH8fv71E",
  authDomain: "clone-bb4c4.firebaseapp.com",
  projectId: "clone-bb4c4",
  storageBucket: "clone-bb4c4.appspot.com",
  messagingSenderId: "385767427556",
  appId: "1:385767427556:web:0a2c4d7dd0eb62feb5cbf1",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup };
