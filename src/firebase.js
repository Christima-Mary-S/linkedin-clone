import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDHEvf2rNzxW-8eYqvxU1zpXbhCe2t_aKU",
  authDomain: "linkedin-clone-e60d8.firebaseapp.com",
  projectId: "linkedin-clone-e60d8",
  storageBucket: "linkedin-clone-e60d8.appspot.com",
  messagingSenderId: "51690328158",
  appId: "1:51690328158:web:3cbaeb09206ce75b67a4cf",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
