import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKQ3ry6KRam0wop3ecAP5jQg61kxNCIKA",
  authDomain: "tiktok-clone-17dd4.firebaseapp.com",
  projectId: "tiktok-clone-17dd4",
  storageBucket: "tiktok-clone-17dd4.appspot.com",
  messagingSenderId: "36161268235",
  appId: "1:36161268235:web:9091f6754aa3c3b743f50e",
  measurementId: "G-PWELEE6S41"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
