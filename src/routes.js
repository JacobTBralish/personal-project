import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Campgrounds from './Components/Campgrounds/Campgrounds';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import SearchbyMap from './Components/Searchbymap/Searchbymap';
import Profile from './Components/Profile/Profile';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/campgrounds' component={Campgrounds} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/searchbymap' component={SearchbyMap} />
        <Route path='/profile' component={Profile} />
    </Switch>
)