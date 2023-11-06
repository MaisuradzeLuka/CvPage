import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOC8H-OyYJXjoQMr7bLHsmyACgRs1Nkm4",
  authDomain: "cvpage-a8b79.firebaseapp.com",
  projectId: "cvpage-a8b79",
  storageBucket: "cvpage-a8b79.appspot.com",
  messagingSenderId: "911267280639",
  appId: "1:911267280639:web:527e4f47a75f1f5c3e7eca",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
