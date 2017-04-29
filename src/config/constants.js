import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA00_iNauH5njeO2CEksQlJS2nLg4CNbtg",
    authDomain: "sales-script-test-app.firebaseapp.com",
    databaseURL: "https://sales-script-test-app.firebaseio.com",
    projectId: "sales-script-test-app",
    storageBucket: "sales-script-test-app.appspot.com",
    messagingSenderId: "773467188076"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
