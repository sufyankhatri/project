import React, { Component } from 'react';
//import './App.css';
import { Redirect,Router, Switch, Route } from 'react-router-dom'
//import {withRouter} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import TimeLine from './components/TimeLine'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import history from './history'
import store from './store'
//import getRoutes from './components/Routes'
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={SignIn} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/TimeLine" component={TimeLine} />
              <Route path="/Profile" component={Profile} />
              <Redirect to="/SignIn" />
            </Switch>
          </Router>
        </Provider>
        {/* {getRoutes} */}
      </div>
    );
  }
}

export default App;
