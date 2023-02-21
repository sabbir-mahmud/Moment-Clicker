// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
    apiKey: "AIzaSyDt5vSvlDTrQBQePA7cdjhxT69Y3Wahxwk",
    authDomain: "moment-clicker.firebaseapp.com",
    projectId: "moment-clicker",
    storageBucket: "moment-clicker.appspot.com",
    messagingSenderId: "455724705999",
    appId: "1:455724705999:web:982b0b83532a59b6ffafba",
    measurementId: "G-PNTLXVJTRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
const auth = getAuth(app);
export default auth;
