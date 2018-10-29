import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './containers/PrivateRoute';
import Home from './containers/Home';
import Dash from './containers/Dash';
import Connect from './containers/Connect';
import Device from './containers/Device';

export default (
    <div>
        <PrivateRoute exact path='/' cp={ Home }/>
        <PrivateRoute exact path='/dashboard' cp={ Dash }/>
        <PrivateRoute exact path='/device' cp={ Device }/>
        <Route exact path='/connect' component={ Connect }/>
    </div>
)