import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp/>
      </div>
    );
  }
}

export default App;
