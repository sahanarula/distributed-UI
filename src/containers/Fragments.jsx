import React, {Component} from 'react';
import { Actions } from '../actions';
import { connect } from 'react-redux';
import Fragments from "../components/Fragments";

class FragmentsContainer extends Component {
    state = {
        isDialogOpened: false,
        name: "",
        url: ""
    };

    componentWillMount () {
        this.props.getFragments();
    }

    toggleDialog (status) {
        this.setState(prevState => {
            return {
                ...prevState,
                isDialogOpened: status
            }
        })
    }

    createFragment () {
        const payload = {
            name: this.state.name,
            url: this.state.url
        };

        this.props.doCreateFragment(payload);
        this.setState(p => {return { ...p, isDialogOpened: false }})
        this.setState(p => { return { ...p, isDialogOpened: false, name: "", url: "", inEditMode: false, fragmentToUpdateId: null } })
    }

    removeFragment (id) {
        this.props.doRemoveFragment(id);
    }

    updateFragment () {
        const payload = {
            id: this.state.fragmentToUpdateId,
            name: this.state.name,
            url: this.state.url
        };

        this.props.doUpdateFragment(payload);
        this.setState(p => { return { ...p, isDialogOpened: false, name: "", url: "", inEditMode: false, fragmentToUpdateId: null } })
    }

    editFragment (id) {
        let { fragments } = this.props.fragments;
        let fragmentToEdit = fragments.filter(f => f.id === id)[0];
        this.setState(p => { return { ...p, name: fragmentToEdit.name, url: fragmentToEdit.url, inEditMode: true, isDialogOpened: true, fragmentToUpdateId: id } })
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
        return <Fragments { ...this.props } { ...this.state }
                          toggleDialog={this.toggleDialog.bind(this)}
                          onChange={this.onChange.bind(this)}
                          editFragment={this.editFragment.bind(this)}
                          removeFragment={this.removeFragment.bind(this)}
                          updateFragment={this.updateFragment.bind(this)}
                          createFragment={this.createFragment.bind(this)} />
    }
}

export default connect(state => state, Actions)(FragmentsContainer);