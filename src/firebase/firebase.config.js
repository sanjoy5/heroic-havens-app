// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkwrjPXWda-lE8OKXzH0lvg7Mq9IfHXBc",
    authDomain: "heroic-havens.firebaseapp.com",
    projectId: "heroic-havens",
    storageBucket: "heroic-havens.appspot.com",
    messagingSenderId: "248503877324",
    appId: "1:248503877324:web:f3badcc20e9d07c1050c69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app