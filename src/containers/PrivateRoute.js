import React, { Component } from 'react';
import { connect }from "react-redux";
import {Actions} from "../actions";
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        return <Route {...this.props.rest} render={(props) => (
                this.props.isAuthenticated === true
                    ? <Component {...props} />
                    : <Redirect to='/connect' />
            )} />
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.app.isAuthenticated
    }
};

export default connect(mapStateToProps, Actions)(PrivateRoute);
