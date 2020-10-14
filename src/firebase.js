import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCAOe_7fnEkBraT3z-u3hvhJwgtOgsGFSM",
  authDomain: "petpage-3b3e4.firebaseapp.com",
  databaseURL: "https://petpage-3b3e4.firebaseio.com",
  projectId: "petpage-3b3e4",
  storageBucket: "petpage-3b3e4.appspot.com",
  messagingSenderId: "474421782012",
  appId: "1:474421782012:web:69a5f036feac44fac1fe79",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { db, auth, storage };
