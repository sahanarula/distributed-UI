import React, {Component} from 'react';
import Connect from '../components/Connect'
import connect from "react-redux/es/connect/connect";
import { Actions } from '../actions';

class ConnectContainer extends Component {
    onSubmit (e) {
        e.preventDefault();
        const { email, password, device } = this.props.app;
        this.props.doLogin({
            email,
            password,
            device
        });
    }

    render() {
        return <Connect onChange={ this.props.onFormChange } { ...this.props.app } onSubmit={this.onSubmit.bind(this)}/>
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, Actions)(ConnectContainer);
