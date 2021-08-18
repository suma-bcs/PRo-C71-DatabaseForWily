import * as firebase from 'firebase'
require('@firebase/firestore')

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCITu3jQReGp68Bigge-ejcl4zkcvCMvQs",
  authDomain: "wilyapp-5b6c7.firebaseapp.com",
  databaseURL: "https://wilyapp-5b6c7-default-rtdb.firebaseio.com",
  projectId: "wilyapp-5b6c7",
  storageBucket: "wilyapp-5b6c7.appspot.com",
  messagingSenderId: "1080511542418",
  appId: "1:1080511542418:web:3b0a94111fce2ffb14a24b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
