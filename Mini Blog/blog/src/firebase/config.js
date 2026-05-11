// inicialização do firebase
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// depois iniciamos o banco de dados da firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuOWOouOCoXf4Ebsn0IAftOvUo9K3ZUeQ",
  authDomain: "miniblog-fb604.firebaseapp.com",
  projectId: "miniblog-fb604",
  storageBucket: "miniblog-fb604.firebasestorage.app",
  messagingSenderId: "372487316503",
  appId: "1:372487316503:web:e4915bfaef3d0b18ffe852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// banco de dados
const db = getFirestore(app)

export {db}; 