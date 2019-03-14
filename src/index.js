import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBLFrT-wIpsgI9nOt4PUgnIRnV7HAMezTU",
    authDomain: "picfinder-512ef.firebaseapp.com",
    databaseURL: "https://picfinder-512ef.firebaseio.com",
    projectId: "picfinder-512ef",
    storageBucket: "",
    messagingSenderId: "1022499626250"
  };
  firebase.initializeApp(config);



ReactDOM.render(<App />, document.querySelector('#root'))



