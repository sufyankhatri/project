import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import SignIn from './SignIn'
import SignUp from './SignUp'
const getRoutes =()=>{
    let routes =(
        <Switch>
        <Route path="/SignIn" exact component={SignIn}  />
        <Route path="/SignUp" exact component={SignUp}  />
        </Switch>
    );
    return routes;
    
}
export default getRoutes