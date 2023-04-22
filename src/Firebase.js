import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAhMpUv8BTGYykKIuBF8GiVrmHtp-D8ifk",
  authDomain: "loginauth-f5875.firebaseapp.com",
  projectId: "loginauth-f5875",
  storageBucket: "loginauth-f5875.appspot.com",
  messagingSenderId: "380544390072",
  appId: "1:380544390072:web:2c206e7a53dcbfe7e1f54d",
  measurementId: "G-B9QYLF8PCC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// Initialize FirebaseAuth and get a reference to the service
export const auth = getAuth(app);

export const database = getDatabase(app);

export default app;