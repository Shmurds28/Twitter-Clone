// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOnzltS1kqaeSBTMxFx4OzdqOLbu8KAzY",
  authDomain: "twitter-clone-61ac9.firebaseapp.com",
  projectId: "twitter-clone-61ac9",
  storageBucket: "twitter-clone-61ac9.appspot.com",
  messagingSenderId: "509504555383",
  appId: "1:509504555383:web:78f2b8229d56ad8c347972",
  measurementId: "G-BJ43Z09FVY"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export default app;
export { db, storage };
