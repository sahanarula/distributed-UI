import React, {Component} from 'react';
import { Actions } from '../../actions';
import "./index.css";
import { connect } from 'react-redux';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700
    },
    tableHeadCell: {
        fontSize: '15px'
    },
    tablecell: {
        fontSize: '13px'
    },
    fontSize: {
        fontSize: '12px'
    },
    formControl: {
        width: '100%',
        marginTop: '14px'
    }
});

class Configuration extends Component {
    state = {
        isDialogOpened: false,
        inEditMode: false,
        deviceType: "",
        fragmentOne: "",
        fragmentTwo: "",
        fragmentThree: ""
    };

    componentWillMount () {
        this.props.getDevice();
        this.props.getFragments();
    }

    toggleDialog (state) {
        this.setState(p => { return { ...p, isDialogOpened: state } });
    }

    handleChange (e) {
        this.setState(p => { return { ...p, [e.target.name]: e.target.value } });
    }

    updateConfiguration () {

    }

    saveConfiguration () {
        const payload = {
            device: this.state.deviceType,
            location: this.props.location,
            configuration: {
                fragmentOne: this.state.fragmentOne,
                fragmentTwo: this.state.fragmentTwo,
                fragmentThree: this.state.fragmentThree
            }
        };

        this.props.doCreateConfiguration(payload);
        this.toggleDialog(false);
    }

    render() {
        const { isDialogOpened, inEditMode, deviceType, fragmentOne, fragmentTwo, fragmentThree } = this.state;
        const { classes, device: { devices }, fragments: { fragments }, config: configurations } = this.props;

        return (
            <div id={"configurations"} className={classes.fontSize}>
                {
                    configurations.map(config => {
                        return (
                            <IconButton onClick={() => {}} aria-label="Delete" color="primary">
                                <img src={`/assets/images/${config.device.type}.png`} alt="" height={25}/>
                            </IconButton>
                        )
                    })
                }
                <IconButton onClick={() => this.toggleDialog(true)} aria-label="Delete" color="primary">
                    <AddIcon />
                </IconButton>
                <Dialog
                    open={isDialogOpened}
                    onClose={() => this.toggleDialog(false) }
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className={classes.fontSize}
                >
                    <DialogTitle id="alert-dialog-title">{ inEditMode ? "Update Configuration" : "Set Configuration"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Please enter the configuration to be { inEditMode ? "updated" : "added" } below.
                        </DialogContentText>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="device-type">Device Type</InputLabel>
                            <Select
                                value={deviceType}
                                onChange={this.handleChange.bind(this)}
                                inputProps={{
                                    name: 'deviceType',
                                    id: 'device-type',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    devices.map(device => <MenuItem value={device.id}>{ device.type }</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="fragment-one">Fragment One</InputLabel>
                            <Select
                                value={fragmentOne}
                                onChange={this.handleChange.bind(this)}
                                inputProps={{
                                    name: 'fragmentOne',
                                    id: 'fragment-one',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    fragments.map(fragment => <MenuItem value={fragment.id}>{ fragment.name }</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="fragment-two">Fragment Two</InputLabel>
                            <Select
                                value={fragmentTwo}
                                onChange={this.handleChange.bind(this)}
                                inputProps={{
                                    name: 'fragmentTwo',
                                    id: 'fragment-two',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    fragments.map(fragment => <MenuItem value={fragment.id}>{ fragment.name }</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="fragment-three">Fragment Three</InputLabel>
                            <Select
                                value={fragmentThree}
                                onChange={this.handleChange.bind(this)}
                                inputProps={{
                                    name: 'fragmentThree',
                                    id: 'fragment-three',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    fragments.map(fragment => <MenuItem value={fragment.id}>{ fragment.name }</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.toggleDialog(true) } color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => { inEditMode ? this.updateConfiguration() : this.saveConfiguration() }} color="primary" autoFocus>
                            { inEditMode ? "Update" : "Save" }
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default connect(state => state, Actions)(withStyles(styles)(Configuration));