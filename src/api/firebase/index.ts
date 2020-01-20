import firebase from 'firebase/app';
import 'firebase/firestore';

// @ts-ignore
import firebaseConfig from './firebase-config.json';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
