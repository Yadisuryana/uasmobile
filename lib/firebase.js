// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt33VaWkFq14bAyeb1WAjjLXlGrFu_cbk",
  authDomain: "monitoring-magang-id.firebaseapp.com",
  projectId: "monitoring-magang-id",
  storageBucket: "monitoring-magang-id.appspot.com",
  messagingSenderId: "443953799892",
  appId: "1:443953799892:web:9476952a6b81064eed1141",
  measurementId: "G-WZE9W33687"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
