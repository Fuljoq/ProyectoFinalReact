import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-Ea2oWOh-23Z5CKIfRL5eovYoR0b8ESU",
  authDomain: "licoreria-7d7be.firebaseapp.com",
  projectId: "licoreria-7d7be",
  storageBucket: "licoreria-7d7be.appspot.com",
  messagingSenderId: "361279678881",
  appId: "1:361279678881:web:1e975e636601f5d27883e0",
  measurementId: "G-PEXTSJ01ZN"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);