import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBAlsfhT_sm1e77yFM6h2JxvGVVzEkeEKE",
    authDomain: "myblog-9541b.firebaseapp.com",
    projectId: "myblog-9541b",
    storageBucket: "myblog-9541b.appspot.com",
    messagingSenderId: "7815833857",
    appId: "1:7815833857:web:b9cfa1b2e19dbcc3775300"
};

//   init firebase
initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

export { auth }


























