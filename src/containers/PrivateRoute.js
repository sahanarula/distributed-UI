import React, { Component } from 'react';
import { connect }from "react-redux";
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({cp: Component, ...rest}) => {
    const {isAuthenticated} = rest;

    return (
        <Route {...rest} render={props => (
            isAuthenticated ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/connect',
                    state: {from: props.location}
                }}/>
            )
        )}
        />
    );
};

function mapStateToProps(state) {
    return {
        isAuthenticated: state.app.isAuthenticated,
    };
}

export default connect(mapStateToProps, null, null, { pure: false })(PrivateRoute);