import React, { Component } from 'react'
import './App.css';
import User from "./components/User";

 class App extends Component {
  render() {
    const test = 34;
    const isAuth = true;
    return (
      <div className='App'>
        {/* <h1>Merhaba React</h1>
        <h4> { 1+ 1 } </h4> 
        <h4> { "test".toLocaleUpperCase() } </h4>
        <h4> { test } </h4>
        <h4> {isAuth ? <p >Musbet </p> : null} </h4> */}
      

        <h4> App Component</h4>
        <User/>
        <User/>
        <User/>
      </div>
    )
  }
}

export default App;