import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCU3vi4UpxDJr6FMuoLG5gHhzGotWIknfk",
    authDomain: "slack-clone-a028b.firebaseapp.com",
    projectId: "slack-clone-a028b",
    storageBucket: "slack-clone-a028b.appspot.com",
    messagingSenderId: "643290257304",
    appId: "1:643290257304:web:5996164e824b4817c2bded",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };