import * as firebase from "firebase/app";
import "firebase/auth";

const fbApp = firebase.initializeApp({
    apiKey: "AIzaSyDUc8ThNFyRc0yoduM04DkpH3DfBs843Sk",
    authDomain: "julifit.firebaseapp.com",
    databaseURL: "https://julifit.firebaseio.com",
    projectId: "julifit",
    storageBucket: "julifit.appspot.com",
    messagingSenderId: "407474908609",
    appId: "1:407474908609:web:d38ea08912db700f119340"
  });

export default fbApp;