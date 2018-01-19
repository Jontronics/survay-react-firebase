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
    });
  }
  answerSelected(){
    
  }
  
  questionSubmit(){
    
  }
  
  constructor(props){
    super(props);
    
    this.state = {
      uid: uuid.v1(), 
      studentName: 'test name JOn',
      answers:{
        answer1: '',
        answer2: '',
        answer3: ''
      },
      isSubmitted: false
    };
    
    this.nameSubmit = this.nameSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
    
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
      questions = '';
    }else if (this.state.studentName !== '' && this.state.isSubmitted === false){
      studentName = <h1> Hey, welcome to survay stuff, {this.state.studentName}</h1>;
        questions = 
        <div>
          <h2>Here are some questions</h2>
          <form onSubmit={this.questionSubmit}>
            <div className="card">
              <label>What do you think about this feature?</label> <br />
              <input type="radio" name="answer1" value="Awesome" onChange={this.answerSelected}/> Awesome 
              <input type="radio" name="answer2" value="It's ok" onChange={this.answerSelected}/> It's ok
              <input type="radio" name="answer3" value="It's terrible" onChange={this.answerSelected}/> It's terrible 
            </div>
            <div className="card">
              <label>Would you ever use this feature?</label> <br />
              <input type="radio" name="answer1" value="Yes" onChange={this.answerSelected}/> Yes
              <input type="radio" name="answer2" value="Sometimes" onChange={this.answerSelected}/> Sometimes
              <input type="radio" name="answer3" value="Never, It's terrible" onChange={this.answerSelected}/> Never, It's terrible 
            </div>
            <div className="card">
              <label>How many times a day do you use this app?</label> <br />
              <input type="radio" name="answer1" value="Everyday" onChange={this.answerSelected}/> Everyday
              <input type="radio" name="answer2" value="Sometimes" onChange={this.answerSelected}/> Every other day
              <input type="radio" name="answer3" value="Never" onChange={this.answerSelected}/> Never 
            </div>
            <input className="feedback-button" type="submit" value="submit" />
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