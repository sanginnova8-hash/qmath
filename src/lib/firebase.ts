import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const getStoredConfig = () => {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem('qmath_firebase_custom_config') : null;
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading stored firebase config:', e);
  }
  return null;
};

const storedConfig = getStoredConfig();

const firebaseConfig = {
  apiKey: storedConfig?.apiKey || import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBBoYCtfFNZSA3sU_O-T-hLthhMHI0h9iI",
  authDomain: storedConfig?.authDomain || import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "qmath-online.firebaseapp.com",
  projectId: storedConfig?.projectId || import.meta.env.VITE_FIREBASE_PROJECT_ID || "qmath-online",
  storageBucket: storedConfig?.storageBucket || import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "qmath-online.firebasestorage.app",
  messagingSenderId: storedConfig?.messagingSenderId || import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "184560180752",
  appId: storedConfig?.appId || import.meta.env.VITE_FIREBASE_APP_ID || "1:184560180752:web:25ef9ba72d91bfb9233495"
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.apiKey !== 'AIzaSyFakeKeyForLocalPreviewQMath' &&
  firebaseConfig.projectId
);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
