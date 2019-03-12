import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import getRoutes from './components/Routes'
import {withRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        {getRoutes}
      </div>
    );
  }
}

export default App;
