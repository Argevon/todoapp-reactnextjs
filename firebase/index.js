import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtpuv-p03rnCQ1ReR8779VFoqHIKRTlng",
  authDomain: "certwebapp.firebaseapp.com",
  projectId: "certwebapp",
  storageBucket: "certwebapp.appspot.com",
  messagingSenderId: "595291828742",
  appId: "1:595291828742:web:dd67f03aa5c8b211714987"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
