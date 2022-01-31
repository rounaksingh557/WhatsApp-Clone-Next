import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEjaWXfivGWrPFUKyFQuu2PlsLmxqfdyc",
  authDomain: "whatsapp-clone-next-1b9c3.firebaseapp.com",
  projectId: "whatsapp-clone-next-1b9c3",
  storageBucket: "whatsapp-clone-next-1b9c3.appspot.com",
  messagingSenderId: "394886053122",
  appId: "1:394886053122:web:a4afb7667de4a9b090561b",
  measurementId: "G-P3L7BXNGN5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
