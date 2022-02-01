import firebase from "firebase";

/**
 * This file contains access to firebase authentication and other services.
 *
 *  Firebase version `8.10.0` is used.
 */

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

/**
 * `db` provides access to firebase firestore database services.
 *
 * Firebase version `8.10.0` is used.
 *
 * @see https://www.npmjs.com/package/firebase/v/8.10.1
 */
const db = app.firestore();
/**
 * `auth` provides access to firebase authentication services.
 *
 *  Firebase version `8.10.0` is used.
 *
 * @see https://www.npmjs.com/package/firebase/v/8.10.1
 */
const auth = app.auth();
/**
 * `provider` provides access to Google authentication granter services.
 *
 *  Firebase version `8.10.0` is used.
 *
 * @see https://www.npmjs.com/package/firebase/v/8.10.1
 */
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
