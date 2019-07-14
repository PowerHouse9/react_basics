import React from 'react';
import './App.css'

//to receieve prop from app.js
// function Tweet(props){
  //Now tring es6 style
  function Tweet({ name, message}){
    return(
      // do className instead of class, this is not a JS its React.
      //remember if you want to use javascript in this JSX(kinda HTML) we need to add curly braces
      <div className = 'tweet'>
          {/* <h3>{props.name}</h3>
          <p>{props.message}</p>
          <h3>Number of Likes</h3> */}
          {/* es6 style */}
          <h3>{name}</h3>
          <p>{message}</p>
          <h3>Number of Likes</h3>
            
      </div>  
    );
}

export default Tweet;