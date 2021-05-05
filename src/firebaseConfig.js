import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';


const config = {
    apiKey: "AIzaSyB5EYWNX0QUh8Vrw8aKY0gLToXGSJmm_UU",
    authDomain: "whatsappclone-c9f3a.firebaseapp.com",
    projectId: "whatsappclone-c9f3a",
    storageBucket: "whatsappclone-c9f3a.appspot.com",
    messagingSenderId: "768951975727",
    appId: "1:768951975727:web:a46ac59c79bc9f6af2ebda"
  };
  const firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  export default firebaseApp;