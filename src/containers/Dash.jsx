import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import Loadable from 'react-loadable';
import './App.css';

class Dash extends Component {
    componentWillMount () {
        this.LoadableCalendar = Loadable({
            loader: () => import('./Calendar'),
            loading: () => <div>Loading Calendar...</div>,
        });
        this.LoadableIoT = Loadable({
            loader: () => import('./IoT'),
            loading: () => <div>Loading IoT...</div>,
        });
        this.LoadableMuseum = Loadable({
            loader: () => import('./Museum'),
            loading: () => <div>Loading Museum...</div>,
        });
    }

    componentDidMount () {
        this.props.initializeApp()
    }
    render() {
        return (
            <div className="App">
                <this.LoadableCalendar />
                <this.LoadableIoT />
                <this.LoadableMuseum />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, Actions)(Dash);
