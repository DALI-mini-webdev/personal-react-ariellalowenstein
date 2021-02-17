import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDkAYyE7UCIC6Tdy8Cewb6msVSg4wabTcA",
    authDomain: "personal-react-website-65261.firebaseapp.com",
    projectId: "personal-react-website-65261",
    storageBucket: "personal-react-website-65261.appspot.com",
    messagingSenderId: "436963070145",
    appId: "1:436963070145:web:3fbf7e1512aac15a72c440",
    measurementId: "G-B8LP7EM395"
  });

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const db = firebase.firestore();


export default {
  firebase, db
}