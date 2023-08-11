import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDHg_FofMES8wMPNGwcfEjj2_49KQIV25U",
    authDomain: "asem-portfolio.firebaseapp.com",
    projectId: "asem-portfolio",
    storageBucket: "asem-portfolio.appspot.com",
    messagingSenderId: "851182637005",
    appId: "1:851182637005:web:e0d73dee79ee4e1f367e84",
});

const db = firebaseConfig.firestore();
export default db;
