import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './containers/PrivateRoute';
import Home from './containers/Home';
import Dash from './containers/Dash';
import Connect from './containers/Connect';

export default (
    <div>
        <PrivateRoute path='/' component={ Home }/>
        <PrivateRoute path='/dashboard' component={ Dash }/>
        <Route path='/connect' component={ Connect }/>
    </div>
)