import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Dash from './containers/Dash';

export default (
    <div className="content-container">
        <Route exact path='/' component={ Home }/>
        <Route exact path='/dashboard' component={ Dash }/>
    </div>
)