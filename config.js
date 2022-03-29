import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyBCdOo98kh9WtMlJXVGXJaDG4kFs_oUUPc",
    authDomain: "e-ride-c4426.firebaseapp.com",
    projectId: "e-ride-c4426",
    storageBucket: "e-ride-c4426.appspot.com",
    messagingSenderId: "505304116293",
    appId: "1:505304116293:web:b9d2af5e605b7bdd51472c"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
