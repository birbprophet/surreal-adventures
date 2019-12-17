import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAnDq91hzKvQR5mzOVKX4W2_JgWwVvIHCI",
  authDomain: "surreal-adventures.firebaseapp.com",
  databaseURL: "https://surreal-adventures.firebaseio.com",
  projectId: "surreal-adventures",
  storageBucket: "surreal-adventures.appspot.com",
  messagingSenderId: "833716284248",
  appId: "1:833716284248:web:0566c1ced8d4bd1596932d",
  measurementId: "G-SCYL8X7063",
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
