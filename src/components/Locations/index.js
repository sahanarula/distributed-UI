import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import './index.css';

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
    locationButton: {
        fontSize: '12px'
    }
});

const Locations = ({ configuration: { locations }, name, url, classes, toggleDialog, isDialogOpened, inEditMode, onChange, createLocation, removeLocation, updateLocation, editLocation }) => {
    return (
        <div id={"locations"}>
            <Button variant="outlined" color="primary" className={classes.locationButton} onClick={() => { toggleDialog(true) }}>
                Add new Location
            </Button>
            <Dialog
                open={isDialogOpened}
                onClose={() => { toggleDialog(false) }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{ inEditMode ? "Update Location" : "Location Details"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please enter the name of the location to be { inEditMode ? "updated" : "added" } below.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name of the location"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={e => { onChange("name", e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { toggleDialog(true) }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => { inEditMode ? updateLocation() : createLocation() }} color="primary" autoFocus>
                        { inEditMode ? "Update" : "Save" }
                    </Button>
                </DialogActions>
            </Dialog>
            {
                locations.length
                    ? <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeadCell} >Locations</TableCell>
                                <TableCell className={classes.tableHeadCell} string={"true"}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {locations.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell className={classes.tablecell}  component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell className={classes.tablecell} string={"true"}>
                                            <IconButton onClick={() => removeLocation(row.id)} aria-label="Delete" color="primary">
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton onClick={() => editLocation(row.id)} aria-label="Delete" color="primary">
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    : null
            }

        </div>
    );
};

export default withStyles(styles)(Locations);
