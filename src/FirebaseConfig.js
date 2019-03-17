import * as firebase from 'firebase'
const config={
    apiKey: "AIzaSyDaw-EVM4Gd1B1-TMstaqr-IjjznzqFbtI",
    authDomain: "auth-2cf55.firebaseapp.com",
    databaseURL: "https://auth-2cf55.firebaseio.com",
    projectId: "auth-2cf55",
    storageBucket: "auth-2cf55.appspot.com",
    messagingSenderId: "25670107308"  
};


export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();