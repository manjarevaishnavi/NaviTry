import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP_0FDNNqlSrEG0wCR0-M0uJwiy69zbAk",
  authDomain: "navitry-b8641.firebaseapp.com",
  projectId: "navitry-b8641",
  storageBucket: "navitry-b8641.firebasestorage.app",
  messagingSenderId: "541875140359",
  appId: "1:541875140359:web:2d53b4e40ab398e63b77a2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);