import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCYefdt-0p5cFSKyTw_lpcH-jelOjOPYKk",
  authDomain: "urbanstyle-3431.firebaseapp.com",
  projectId: "urbanstyle-3431",
  storageBucket: "urbanstyle-3431.appspot.com",
  messagingSenderId: "804295550937",
  appId: "1:804295550937:web:a5d11fb44e1d402b621bc8"
};


const fire = firebase.initializeApp(firebaseConfig)
const auth = fire.auth()

const firestore = firebase.firestore()

export {
  firestore,
  auth
}