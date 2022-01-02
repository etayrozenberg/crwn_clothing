import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

console.log(firestore.collection('users').doc('4SozTI4bvQaYirbEcsjl').collection('cartItems').doc('CRyMj3M3ZcVXeEKmNt4A'));