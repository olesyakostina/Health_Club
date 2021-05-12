import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCiBWfwrmOhd53Olaqr8mWhA0ErHhvvTz0",
    authDomain: "healthclub-f1125.firebaseapp.com",
    projectId: "healthclub-f1125",
    storageBucket: "healthclub-f1125.appspot.com",
    messagingSenderId: "623348571127",
    appId: "1:623348571127:web:f949bac9b1a16679172cf2",
});

export const firestore = app.firestore();
export const auth = app.auth();

export default app;
