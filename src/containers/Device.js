import React, {Component} from 'react';
import { Actions } from '../actions';
import { connect } from 'react-redux';

class Device extends Component {
    componentWillMount () {
        this.props.getDevice();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, Actions)(Device);