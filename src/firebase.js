import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB9P2KcY58BHOHyiMVRVFdEAj5NTiFgrWo",
	authDomain: "react-crud-app-616dc.firebaseapp.com",
	projectId: "react-crud-app-616dc",
	storageBucket: "react-crud-app-616dc.appspot.com",
	messagingSenderId: "669117674886",
	appId: "1:669117674886:web:c8a329734d48e883092807",
	measurementId: "G-DG7GS8PF9C",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {db, auth, googleAuthProvider, facebookAuthProvider};
