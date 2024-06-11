import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-baa87.firebaseapp.com",
  projectId: "reactchat-baa87",
  storageBucket: "reactchat-baa87.appspot.com",
  messagingSenderId: "666367451024",
  appId: "1:666367451024:web:af1ac9827cb8b4354c5d15",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
