import firebase from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyDdIkeclGgF9ZOA5WIg850hdUGa6bBPleY",
    authDomain: "climapp-b4145.firebaseapp.com",
    projectId: "climapp-b4145",
    storageBucket: "climapp-b4145.appspot.com",
    messagingSenderId: "377546913708",
    appId: "1:377546913708:web:ac5ab4f9ad8092bc9bec09"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);