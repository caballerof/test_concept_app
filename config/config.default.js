import firebase from 'firebase';

const firebaseConfig = {
  apiKey: REPLACE_ME,
  authDomain: REPLACE_ME,
  databaseURL: REPLACE_ME,
  projectId: REPLACE_ME,
  storageBucket: REPLACE_ME,
  messagingSenderId: REPLACE_ME,
  appId: REPLACE_ME
};

firebase.initializeApp(firebaseConfig);

export const FB = firebase;
export const dbFB = firebase.database();
export const authFB = firebase.auth();
export const storageFB = firebase.storage();
