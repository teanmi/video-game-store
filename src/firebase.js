import { initializeApp } from "firebase/app";
import FIREBASE_API_KEY from "./apiKey"

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "game-mart-1617a.firebaseapp.com",
  projectId: "game-mart-1617a",
  storageBucket: "game-mart-1617a.appspot.com",
  messagingSenderId: "977383191155",
  appId: "1:977383191155:web:70cc702490a372103af006"
};


const app = initializeApp(firebaseConfig);