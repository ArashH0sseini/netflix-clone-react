import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDJptU4Yn4UYCgNEFki4aakJyMngpfU6MA",
  authDomain: "netflix-clone-react-3d845.firebaseapp.com",
  projectId: "netflix-clone-react-3d845",
  storageBucket: "netflix-clone-react-3d845.appspot.com",
  messagingSenderId: "927129616843",
  appId: "1:927129616843:web:d936509ea2f1b6b0c2b64e"
};



const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
// firebase.auth().createUserWithEmailAndPassword


export { auth }
export default db;