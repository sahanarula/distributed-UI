import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import Loadable from 'react-loadable';
import _ from 'underscore';
import './App.css';
import Renderer from "./Renderer";

class Dash extends Component {
    state = {
        isInitialized: false,
        componentsToRender: {}
    };

    componentWillMount () {
        this.props.connectProximity();
        this.props.getFragments();
        this.props.getLocations();
        this.props.getDevice();
    }

    _getLoadableComponent (name, url) {
        return Loadable({
            loader: () => import(`./${name}/index`),
            loading: () => <div>{ `Loading ${name}...` }</div>
        })
    }

    _setupRender() {
        const allFragments = this.props.fragments.fragments;
        const currentLocation = this.props.app.currentLocation.name;
        const selectedConfigurations = _.findWhere(this.props.configuration.locations, { name: currentLocation });
        const currentDeviceConfigs = selectedConfigurations.configurations.filter(config => config.device.type === this.props.app.device);
        const fragmentsMap = currentDeviceConfigs.length && currentDeviceConfigs[0].configuration;
        const componentsToRender = Object.keys(fragmentsMap).reduce((renderMap, key) => {
            if (!fragmentsMap[key]) { return renderMap; }
            var foundFragment = _.findWhere(allFragments, { id: fragmentsMap[key] });
            renderMap[foundFragment.name] = this._getLoadableComponent(foundFragment.name, foundFragment.url);
            return renderMap
        }, {});
        this.setState(p => {return {...p, isInitialized: true, componentsToRender }});
    }

    componentWillReceiveProps (newProps) {
        if (newProps.app.isLocationLoaded && newProps.device.isLoaded && newProps.configuration.isLoaded && newProps.fragments.isLoaded) {
            setTimeout(() => {
                if (!this.state.isInitialized || this.props.app.forceUpdate) {
                    this._setupRender()
                    this.props.setForceUpdate(false);
                }
            }, 0);
        }
    }

    componentDidMount () {
        document.addEventListener("enteredRegion", e => {
            if (this.props.app.currentLocation.name !== e.detail.region.identifier) {
                this.props.doUpdateProximity({ location: e.detail.region.identifier });
            }
        });
        document.addEventListener("exitRegion", e => {
            if (this.props.app.currentLocation.name !== "Default") {
                this.props.doUpdateProximity({ location: "Default" });
            }
        });
    }

    render() {
        const { app: { isLocationLoaded } } = this.props;

        return (
            <div className="App">
                {
                    isLocationLoaded && !_.isEmpty(this.state.componentsToRender)
                        ? <Renderer components={this.state.componentsToRender}/>
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
