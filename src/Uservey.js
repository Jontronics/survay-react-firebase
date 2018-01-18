import React, { Component } from 'react';
const firebase = require('firebase');
const uuid = require('uuid');

var config = {
    apiKey: "AIzaSyAZCZGWrToSwFcvYkZOuTqYOIIqJg3hxJs",
    authDomain: "uservey-3d3c7.firebaseapp.com",
    databaseURL: "https://uservey-3d3c7.firebaseio.com",
    projectId: "uservey-3d3c7",
    storageBucket: "uservey-3d3c7.appspot.com",
    messagingSenderId: "225411092565"
  };
  firebase.initializeApp(config);

class Uservey extends Component {
  render(){
    return(
      <div>
        
        I am from Uservey Component
      
      </div>
    );
  }
}


export default Uservey;