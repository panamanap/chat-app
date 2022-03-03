import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEmthpUdhh7SVRDDngzfJxP-NAs1XXylM",
  authDomain: "chat-app-db80f.firebaseapp.com",
  projectId: "chat-app-db80f",
  storageBucket: "chat-app-db80f.appspot.com",
  messagingSenderId: "478477774280",
  appId: "1:478477774280:web:208818a3658957c89164fd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);