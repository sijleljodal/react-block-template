import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBuUS3ze3Fi-1_LQZJlaLb9-o1CZBsPrcI",
    authDomain: "react-blog-firebase-cb093.firebaseapp.com",
    databaseURL: "https://react-blog-firebase-cb093.firebaseio.com",
    projectId: "react-blog-firebase-cb093",
    storageBucket: "react-blog-firebase-cb093.appspot.com",
    messagingSenderId: "1003164865662",
    appId: "1:1003164865662:web:56ffe4f4f3b2972cfeb42f",
    measurementId: "G-5PERSGFFBC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase