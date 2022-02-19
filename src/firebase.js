import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8O2dF9iUJY70RA9Ih4nmXTzu8GACOvQE",
  authDomain: "slack-clone-a2732.firebaseapp.com",
  projectId: "slack-clone-a2732",
  storageBucket: "slack-clone-a2732.appspot.com",
  messagingSenderId: "383918228423",
  appId: "1:383918228423:web:a27af0103aa6f946ba4fe2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
