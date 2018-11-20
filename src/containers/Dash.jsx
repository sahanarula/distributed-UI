import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import Loadable from 'react-loadable';
import './App.css';
import Renderer from "./Renderer";

class Dash extends Component {
    componentWillMount () {
        this.props.connectProximity();
        this.LoadableCalendar = Loadable({
            loader: () => import('./Calendar'),
            loading: () => <div>Loading Calendar...</div>,
        });
        this.LoadableReader = Loadable({
            loader: () => import('./Reader'),
            loading: () => <div>Loading Reader...</div>,
        });
        this.LoadablePlayer = Loadable({
            loader: () => import('./Player'),
            loading: () => <div>Loading Player...</div>,
        });
    }

    componentDidMount () {
        document.addEventListener("enteredRegion", e => {
            debugger;
            this.props.doUpdateProximity({ location: e.detail.region.identifier });
        })
    }

    render() {
        const { app: { isLocationLoaded } } = this.props;

        return (
            <div className="App">
                {
                    isLocationLoaded
                        ? <Renderer />
                        : "Loading customized components..."
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, Actions)(Dash);
