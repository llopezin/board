import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "natural-simretrico.firebaseapp.com",
    projectId: "natural-simretrico",
    storageBucket: "natural-simretrico.firebasestorage.app",
    messagingSenderId: "407863021930",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const clientApp = initializeApp(firebaseConfig);
export const clientAuth = getAuth(clientApp);