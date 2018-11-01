import React, {Component} from 'react';
import { Actions } from '../actions';
import { connect } from 'react-redux';
import Device from '../components/Device';

class DeviceContainer extends Component {
    componentWillMount () {
        this.props.getDevice();
    }

    render() {
        return <Device { ...this.props } />
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, Actions)(DeviceContainer);