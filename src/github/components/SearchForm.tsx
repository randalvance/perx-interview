import React from 'react';

import { isEmpty } from 'lodash';

import { Button, Grid, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
        marginTop: theme.spacing(2),
        height: 50,
    },
    usernameInput: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
}));

const SearchForm: React.FC<{
    username: string;
    isLoading: boolean;
    onUsernameChanged: (e: any) => void;
    onSearchClicked: (e: any) => void;
}> = ({ username, isLoading, onUsernameChanged, onSearchClicked }) => {
    const classes = useStyles();
    return (
        <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
        >
            <Grid item md={6} xs={12}>
                <TextField
                    className={classes.usernameInput}
                    label="GitHub Username"
                    fullWidth
                    value={username}
                    onChange={onUsernameChanged}
                />
            </Grid>
            <Grid item md={6} xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    fullWidth
                    onClick={onSearchClicked}
                    disabled={isEmpty(username) || isLoading}
                >
                    Get User Information
                </Button>
            </Grid>
        </Grid>
    );
};

export default SearchForm;
