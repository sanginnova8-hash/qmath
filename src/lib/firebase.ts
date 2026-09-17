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
  apiKey: storedConfig?.apiKey || import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: storedConfig?.authDomain || import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: storedConfig?.projectId || import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: storedConfig?.storageBucket || import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: storedConfig?.messagingSenderId || import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: storedConfig?.appId || import.meta.env.VITE_FIREBASE_APP_ID
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.apiKey !== 'AIzaSyFakeKeyForLocalPreviewQMath' &&
  firebaseConfig.projectId
);

const app = !getApps().length ? initializeApp(firebaseConfig.apiKey ? firebaseConfig : {
  apiKey: 'demo-api-key',
  authDomain: 'demo.firebaseapp.com',
  projectId: 'demo-project',
  storageBucket: 'demo.appspot.com',
  messagingSenderId: '123456789',
  appId: '1:123456789:web:demo'
}) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
