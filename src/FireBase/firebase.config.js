// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmWy5FMfvZ65y5ElOOKS-J7hglEeLO2oc",
    authDomain: "love-8de9b.firebaseapp.com",
    projectId: "love-8de9b",
    storageBucket: "love-8de9b.appspot.com",
    messagingSenderId: "57469054966",
    appId: "1:57469054966:web:ca1ec64404acf18abde1d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth