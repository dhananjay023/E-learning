import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBzeIYgAB6va-941CEbhe3pPxJ7wD7xaPE",
  authDomain: "humanresoursemanagement-6e5c2.firebaseapp.com",
  projectId: "humanresoursemanagement-6e5c2",
  storageBucket: "humanresoursemanagement-6e5c2.firebasestorage.app",
  messagingSenderId: "480473818967",
  appId: "1:480473818967:web:632f95f0ce183bc9cac012",
  measurementId: "G-70VWGZFZ4E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
