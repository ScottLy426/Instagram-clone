import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCNIPcjKOBdhNof_xPPYCmDh4fa1vF4Nfw',
  authDomain: 'instagram-clone-850cd.firebaseapp.com',
  projectId: 'instagram-clone-850cd',
  storageBucket: 'instagram-clone-850cd.appspot.com',
  messagingSenderId: '466943735861',
  appId: '1:466943735861:web:70fb10a6972d598c05197c',
  measurementId: 'G-XKSYEKHJBD'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
