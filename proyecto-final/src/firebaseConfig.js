import firebase from "firebase/app";
import "firebase/firestore";

const miConfiguracion = {
        apiKey: "AIzaSyBdoWgUPJ4cyY8ofTwXFuL_7MmBTlwnRJQ",
        authDomain: "proyecto-final-react-1541b.firebaseapp.com",
        projectId: "proyecto-final-react-1541b",
        storageBucket: "proyecto-final-react-1541b.appspot.com",
        messagingSenderId: "633421662132",
        appId: "1:633421662132:web:a369cc68c64acf40ed14e1",
        measurementId: "G-2B5WJB424C"
};

const app = firebase.initializeApp(miConfiguracion);

export const firestore = firebase.firestore(app)
export const fb = firebase