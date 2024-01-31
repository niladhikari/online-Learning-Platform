
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0C_Ge69jX53AJZoiCriiqHCg5kZK2TBw",
  authDomain: "online-learning-450fa.firebaseapp.com",
  projectId: "online-learning-450fa",
  storageBucket: "online-learning-450fa.appspot.com",
  messagingSenderId: "719819685315",
  appId: "1:719819685315:web:a67e90dc040c15c91d9176"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;