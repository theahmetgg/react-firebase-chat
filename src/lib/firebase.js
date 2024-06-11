import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-e3126.firebaseapp.com",
  projectId: "reactchat-e3126",
  storageBucket: "reactchat-e3126.appspot.com",
  messagingSenderId: "718578917391",
  appId: "1:718578917391:web:c521d6e91227f157c0837a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
