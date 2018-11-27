import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';
import NavBar from '../components/NavBar';
import { Actions } from '../actions';
import classNames from 'classnames';
import './App.css';

class Dashboard extends Component {
    render() {
        const classes = classNames('content-container', { offset: this.props.isAuthenticated });

        return (
            <BrowserRouter>
                <div className={"app-container"}>
                    {
                        this.props.isAuthenticated
                            ? <NavBar />
                            : null
                    }
                    <div className={ classes }>
                        { routes }
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.app.isAuthenticated
    }
};

export default connect(mapStateToProps, Actions)(Dashboard);
