import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import Loadable from 'react-loadable';
import './App.css';

class Dash extends Component {
    componentWillMount () {
        this.LoadableComponent = Loadable({
            loader: () => import('./Test'),
            loading: () => <div>Loading...</div>,
        });
    }
    componentWillReceiveUpdates () {
        this.LoadableComponent = Loadable({
            loader: () => import('./Test'),
            loading: () => <div>Loading...</div>,
        });
    }

    componentDidMount () {
        this.props.initializeApp()
    }
    render() {
        return (
            <div className="App">
                <this.LoadableComponent />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, Actions)(Dash);
