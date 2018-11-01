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
    fragmentButton: {
        fontSize: '12px'
    }
});

const Fragments = ({ fragments: { fragments }, name, url, classes, toggleDialog, isDialogOpened, inEditMode, onChange, createFragment, removeFragment, updateFragment, editFragment }) => {
    return (
        <div id={"fragments"}>
            <Button variant="outlined" color="primary" className={classes.fragmentButton} onClick={() => { toggleDialog(true) }}>
                Add new Fragment
            </Button>
            <Dialog
                open={isDialogOpened}
                onClose={() => { toggleDialog(false) }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{ inEditMode ? "Update Fragment" : "Fragment Details"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please enter the name and url of the fragment to be { inEditMode ? "updated" : "added" } below.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name of the fragment"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={e => { onChange("name", e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="url"
                        label="URL of the fragment"
                        type="text"
                        fullWidth
                        value={url}
                        onChange={e => { onChange("url", e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { toggleDialog(true) }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => { inEditMode ? updateFragment() : createFragment() }} color="primary" autoFocus>
                        { inEditMode ? "Update" : "Save" }
                    </Button>
                </DialogActions>
            </Dialog>
            {
                fragments.length
                    ? <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeadCell} >Fragments</TableCell>
                                <TableCell className={classes.tableHeadCell} string={"true"}>URIs</TableCell>
                                <TableCell className={classes.tableHeadCell} string={"true"}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fragments.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell className={classes.tablecell}  component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell className={classes.tablecell} string={"true"}>{row.url}</TableCell>
                                        <TableCell className={classes.tablecell} string={"true"}>
                                            <IconButton onClick={() => removeFragment(row.id)} aria-label="Delete" color="primary">
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton onClick={() => editFragment(row.id)} aria-label="Delete" color="primary">
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

export default withStyles(styles)(Fragments);
