import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCB-ch09gp-Z2ln019ysDuoZaGBVqr86nI",
    authDomain: "crwn-db-e89e4.firebaseapp.com",
    projectId: "crwn-db-e89e4",
    storageBucket: "crwn-db-e89e4.appspot.com",
    messagingSenderId: "342237361074",
    appId: "1:342237361074:web:0737b4f27c8df4939c6aab",
    measurementId: "G-JTNLY0X4S7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;