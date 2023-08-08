import React, { Component } from 'react'
import './App.css';
import User from "./components/User";

// import boostrap
import 'bootstrap/dist/css/bootstrap.css';

// import functional Component
import Navbar from "./components/Navbar";


 class App extends Component {
  render() {
    const test = 34;
    const isAuth = true;
    return (
      <div className='container'>
        {/* <h1>Merhaba React</h1>
        <h4> { 1+ 1 } </h4> 
        <h4> { "test".toLocaleUpperCase() } </h4>
        <h4> { test } </h4>
        <h4> {isAuth ? <p >Musbet </p> : null} </h4> */}
      

        {/* <h4> App Component</h4>
        <User/>
        <User/>
        <User/> */}

      {/* <h1 style={{color:"red", fontSize:"40px"}}>Merhaba React</h1>      
      <h2 className='header'>Hello</h2> */}

       <Navbar title = "User App 2"/>
       <hr />
       <User
       name = "Aydan"
       salary = "5000"
      //  departmen = "Bilisim"
       />
       
      </div>
    )
  }
}

export default App;