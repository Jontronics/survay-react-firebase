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
  
  nameSubmit(event){
    let studentName = this.refs.name.value;
    this.setState({studentName: studentName}, function(){
      console.log(this.state)
    })
  }
  
  constructor(props){
    super(props);
    
    this.state = {
      uid: uuid.v1(), 
      studentName: '',
      answers:{
        answer1: '',
        answer2: '',
        answer3: ''
      },
      isSubmitted: false
    };
    
    this.nameSubmit = this.nameSubmit.bind(this);
    
  }


  render(){
    let studentName;
    let questions;
    
    if(this.state.studentName === '' && this.state.isSubmitted === false){
      studentName = <div>
      <h1>Welcome to survay: </h1>
      <form onSubmit={this.nameSubmit}>
      
      <input className="namy" type="text" placeholder="Insert your name" ref="name" />
        
      
      </form>
      
      </div>
    }
    
    return(
      <div>
        
      {studentName}
      ----------------------------
      {questions}
      
      </div>
    );
  }
}




export default Uservey;