import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDYXmHl7AR7MORcuwtDJrM41-f1JRLJw0w",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "teeket-f99c1.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "teeket-f99c1",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "teeket-f99c1.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "871046296700",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:871046296700:web:a57b1bae8877c292e045f9",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-37X070SDL5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
