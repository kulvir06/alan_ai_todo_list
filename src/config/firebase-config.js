
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDkwW9fP6ruMH9SyTMNJNYgy46pxWxyrN8",
    authDomain: "alan-todo-4ee1b.firebaseapp.com",
    projectId: "alan-todo-4ee1b",
    storageBucket: "alan-todo-4ee1b.appspot.com",
    messagingSenderId: "36846875154",
    appId: "1:36846875154:web:41fdb9a7a134b5a1e1decb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);