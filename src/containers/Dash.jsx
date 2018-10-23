import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import './App.css';

class Dash extends Component {
    componentDidMount () {
        this.props.initializeApp()
    }
    render() {
        return (
            <div className="App">
                Welcome to Dashboard
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, Actions)(Dash);
