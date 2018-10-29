import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

function FieldGroup({ id, label, help, children, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            {
                children
                    ? <FormControl {...props} >
                        { children }
                    </FormControl>
                    : <FormControl {...props} />
            }
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

const Connect = ({ onChange, onSubmit, email, password, device }) => {
    return (
        <div id={"connect"}>
            <form onSubmit={onSubmit}>
                <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    label="Email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={e => onChange({ email: e.target.value })}
                />
                <FieldGroup
                    id="formControlsPassword"
                    type="password"
                    label="Password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => onChange({ password: e.target.value })}
                />
                <FieldGroup
                    id="formControlsDevice"
                    type="select"
                    componentClass="select"
                    label="Device Type"
                    placeholder="Select Device Type"
                    value={device}
                    onChange={e => onChange({ device: e.target.value })}
                >
                    <option disabled value="none">Select device</option>
                    <option value="mobile">Mobile</option>
                    <option value="computer">Computer</option>
                    <option value="tablet">tablet</option>
                </FieldGroup>
                <Button type="submit">Join</Button>
            </form>
        </div>
    );
};

export default Connect;
