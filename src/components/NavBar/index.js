import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import logo from './ubicomp.png'
import signout from './signout.svg';
import './navbar.css'

const NavBar = (props) => {
    const path = window.location.pathname;

    return (
        <div className="NavBar" id="navbar">
            <img src={ logo } className="navbar_logo" alt="Diversio Global"/>
            <ul className="navbar_list">
                <li className={ classNames({ selected: path === '/' }) }><Link to="/">Home</Link></li>
                <li className={ classNames({ selected: path === '/device' }) }><Link to="/device">Devices</Link></li>
                <li className={ classNames({ selected: path === '/fragments' }) }><Link to="/fragments">Fragments</Link></li>
                <li className={ classNames({ selected: path === '/configuration' }) }><Link to="/configuration">Configuration</Link></li>
            </ul>
            <div className="navbar_signout-container">
                <img src={ signout } alt=""/>
                <a href="" className="navbar_signout">Sign out</a>
            </div>
        </div>
    )
};

export default NavBar;