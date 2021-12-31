// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEDrq-zicR6Q34jTXurj_CiCEtrXep66M",
    authDomain: "reels-41dd4.firebaseapp.com",
    projectId: "reels-41dd4",
    storageBucket: "reels-41dd4.appspot.com",
    messagingSenderId: "191157908264",
    appId: "1:191157908264:web:e42efc5fbf6045c129d61d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database ={
  users : firestore.collection('users'),
  posts : firestore.collection('posts'),
  comments : firestore.collection('comments'),
  getTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage();