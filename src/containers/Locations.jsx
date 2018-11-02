import React, {Component} from 'react';
import { Actions } from '../actions';
import { connect } from 'react-redux';
import Locations from "../components/Locations";

class LocationsContainer extends Component {
    state = {
        isDialogOpened: false,
        name: ""
    };

    componentWillMount () {
        this.props.getFragments();
        this.props.getLocations();
    }

    toggleDialog (status) {
        this.setState(prevState => {
            return {
                ...prevState,
                isDialogOpened: status
            }
        })
    }

    createLocation () {
        const payload = {
            name: this.state.name
        };

        this.props.doCreateLocation(payload);
        this.setState(p => {return { ...p, isDialogOpened: false }})
        this.setState(p => { return { ...p, isDialogOpened: false, name: "", inEditMode: false, locationToUpdateId: null } })
    }

    removeLocation (id) {
        this.props.doRemoveLocation(id);
    }

    updateLocation () {
        const payload = {
            id: this.state.locationToUpdateId,
            name: this.state.name
        };

        this.props.doUpdateLocation(payload);
        this.setState(p => { return { ...p, isDialogOpened: false, name: "", inEditMode: false, locationToUpdateId: null } })
    }

    editLocation (id) {
        let { locations } = this.props.configuration;
        let locationToEdit = locations.filter(f => f.id === id)[0];
        this.setState(p => { return { ...p, name: locationToEdit.name, inEditMode: true, isDialogOpened: true, locationToUpdateId: id } })
    }

    onChange (name, value) {
        this.setState((p) => {
            return {
                ...p,
                [name]: value
            }
        })
    }

    render() {
        return <Locations { ...this.props } { ...this.state }
                          toggleDialog={this.toggleDialog.bind(this)}
                          onChange={this.onChange.bind(this)}
                          editLocation={this.editLocation.bind(this)}
                          removeLocation={this.removeLocation.bind(this)}
                          updateLocation={this.updateLocation.bind(this)}
                          createLocation={this.createLocation.bind(this)} />
    }
}

export default connect(state => state, Actions)(LocationsContainer);