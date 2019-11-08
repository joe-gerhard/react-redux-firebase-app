import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCnYJFRiPPCjv-WcAjCwqbNK1twHvMyBkg",
  authDomain: "marioplan-44157.firebaseapp.com",
  databaseURL: "https://marioplan-44157.firebaseio.com",
  projectId: "marioplan-44157",
  storageBucket: "marioplan-44157.appspot.com",
  messagingSenderId: "818807107093",
  appId: "1:818807107093:web:fea0a5ec9a902f8314281c",
  measurementId: "G-NGB61L74ED"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
