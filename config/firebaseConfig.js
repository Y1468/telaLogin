import firebase from "firebase/compat/app";
import "firebase/compat/database"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCCvhoSDvH1O40NbLkaGclYpFmiai7nCi0",
    authDomain: "login-94301.firebaseapp.com",
    projectId: "login-94301",
    storageBucket: "login-94301.appspot.com",
    messagingSenderId: "408187719724",
    appId: "1:408187719724:web:c09a1ff0334288e31e8189"
  };

  if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  }

  export default firebase
  
  