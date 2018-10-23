import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import Dashboard from '../components/Dashboard/Home';
import './App.css';

class Home extends Component {
    render() {

        return (
            <div className="App">
                <Dashboard />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, Actions)(Home);
