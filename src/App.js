import React, { Component } from 'react';
//import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import {withRouter} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import {Provider} from 'react-redux'
import store from './store'
//import getRoutes from './components/Routes'
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/SignUp"  component={SignUp} />
          </Switch>
        </Router>
        </Provider>
      {/* {getRoutes} */}
      </div>
    );
  }
}

export default App;
