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
    apiKey: "AIzaSyBm52ZvecpO-_gbO154ZZG_f0-GlQTvIKs",
    authDomain: "auth-02-3eb64.firebaseapp.com",
    projectId: "auth-02-3eb64",
    storageBucket: "auth-02-3eb64.appspot.com",
    messagingSenderId: "425165865454",
    appId: "1:425165865454:web:b8d92b96f83add0ae88eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
const auth = getAuth(app);
export default auth;
