import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCA3iWJkeeXe9KRAtnk-isNemVQymf5tLw",
    authDomain: "urban-style-3431.firebaseapp.com",
    databaseURL: "https://urban-style-3431-default-rtdb.firebaseio.com",
    projectId: "urban-style-3431",
    storageBucket: "urban-style-3431.appspot.com",
    messagingSenderId: "778581309043",
    appId: "1:778581309043:web:f9241bc2304d263b6b5c06"
  };


const fire = firebase.initializeApp(firebaseConfig)
const auth = fire.auth()

const firestore = firebase.firestore()

export {
  firestore,
  auth
}