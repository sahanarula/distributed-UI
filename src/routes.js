import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './containers/PrivateRoute';
import Dash from './containers/Dash';
import Connect from './containers/Connect';
import Device from './containers/Device';
import Fragments from './containers/Fragments';
import Locations from './containers/Locations';

export default (
    <div>
        <PrivateRoute exact path='/' cp={ Dash }/>
        <PrivateRoute exact path='/device' cp={ Device }/>
        <PrivateRoute exact path='/fragments' cp={ Fragments }/>
        <PrivateRoute exact path='/configuration' cp={ Locations }/>
        <Route exact path='/connect' component={ Connect }/>
    </div>
)