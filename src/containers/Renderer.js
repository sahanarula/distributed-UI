import React, {Component} from 'react';

class Renderer extends Component {
    render() {
        const COMPS = this.props.components;

        return Object.keys(COMPS).map((cp, key) => {
            const CP = COMPS[cp];
            return <CP />
        });
    }
}

export default Renderer;