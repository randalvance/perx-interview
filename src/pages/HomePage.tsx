import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { ApplicationState } from '../application/reducers';
import {
    getUserInfo,
    getUserOrganizations,
    getUserRepositories,
} from '../github/actions';
import { UserInfo, UserOrganization, UserRepository } from '../github/types';

type State = ApplicationState;

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const HomePage: React.FC<{}> = () => {
    const userInfoLoading = useSelector<State, boolean>(
        s => s.github.userInfoLoading
    );
    const userInfo = useSelector<State, UserInfo | null>(
        s => s.github.userInfo
    );
    const userRepositories = useSelector<State, UserRepository[]>(
        s => s.github.userRepositories
    );
    const userOrganizations = useSelector<State, UserOrganization[]>(
        s => s.github.userOrganizations
    );
    const dispatch = useDispatch();
    const handleClick = useCallback(
        (e: any) => {
            e.preventDefault();
            dispatch(getUserInfo('randalvance'));
            dispatch(getUserRepositories('randalvance'));
            dispatch(getUserOrganizations('gaearon'));
        },
        [dispatch, getUserInfo]
    );
    const classes = useStyles();

    return (
        <Grid direction="column" justify="center">
            <h1>{userInfoLoading ? 'User is loading...' : 'Not Loading'}</h1>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Get User Information
            </Button>
            <h1>User</h1>
            <p>User is {userInfo ? userInfo.login : 'None'}</p>
            <p>
                User Repositories Count:{' '}
                {userRepositories ? userRepositories.length : 0}
            </p>
            <p>
                User Organization Count:{' '}
                {userOrganizations ? userOrganizations.length : 0}
            </p>
        </Grid>
    );
};

export default HomePage;
