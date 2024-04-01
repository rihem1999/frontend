import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7L6sdKiGsD1WhKQK__k-ifcrxaSIPI4A",
  authDomain: "pawpaw-99ed0.firebaseapp.com",
  projectId: "pawpaw-99ed0",
  storageBucket: "pawpaw-99ed0.appspot.com",
  messagingSenderId: "659960351576",
  appId: "1:659960351576:web:096735deeb07757e60332d",
  measurementId: "G-1H07PCPPE5"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const auth = firebase.auth();
const firestore = firebase.firestore();

export { storage, firestore, auth };
export default firebase;