import firebase from "firebase";

/**
 * This file contains access to firebase authentication and other services.
 */

const firebaseConfig = {
  // Add your Config Here
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

/**
 * `db` provides access to firebase firestore database services.
 */
const db = app.firestore();
/**
 * `auth` provides access to firebase authentication services.
 */
const auth = app.auth();
/**
 * `provider` provides access to Google authentication granter services.
 */
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
