import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import FindState from './Components/Campgrounds/FindState';
import FindPark from './Components/Campgrounds/FindPark';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import SearchbyMap from './Components/Searchbymap/Searchbymap';
import Profile from './Components/Profile/Profile';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/findstate' component={FindState} />
        <Route path='/findparks' component={FindPark} />
        {/* <Route path='/findstate' component={FindState} /> */}
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/searchbymap' component={SearchbyMap} />
        <Route path='/profile' component={Profile} />
    </Switch>
)