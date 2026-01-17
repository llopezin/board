import * as admin from 'firebase-admin';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        }),
        projectId: process.env.FIREBASE_PROJECT_ID,
    });
}

export const db = admin.firestore();
export const auth = admin.auth();

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