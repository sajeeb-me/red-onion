import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBLfhgSi1SmPXBnvJ2j1DhETA4NOxTYrcs",
    authDomain: "red-onion-a4f4a.firebaseapp.com",
    projectId: "red-onion-a4f4a",
    storageBucket: "red-onion-a4f4a.appspot.com",
    messagingSenderId: "919899741390",
    appId: "1:919899741390:web:1d58bd1f403affcd7cc49f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;