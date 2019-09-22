import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import { ApplicationState } from '../application/reducers';
import {
    getUserInfo,
    getUserOrganizations,
    getUserRepositories,
    setGithubUsername,
} from '../github/actions';
import Organizations from '../github/components/Organizations';
import Repositories from '../github/components/Repositories';
import SearchForm from '../github/components/SearchForm';
import { UserOrganization, UserRepository } from '../github/types';

type State = ApplicationState;

const HomePage: React.FC<{}> = () => {
    const username = useSelector<State, string>(s => s.github.username);
    const userRepositoriesLoading = useSelector<State, boolean>(
        s => s.github.userRepositoriesLoading
    );
    const userOrganizationsLoading = useSelector<State, boolean>(
        s => s.github.userOrganizationsLoading
    );
    const userRepositories = useSelector<State, UserRepository[]>(
        s => s.github.userRepositories
    );
    const userOrganizations = useSelector<State, UserOrganization[]>(
        s => s.github.userOrganizations
    );
    const dispatch = useDispatch();
    const handleSearch = useCallback(
        (e: any) => {
            e.preventDefault();
            dispatch(getUserRepositories(username));
            dispatch(getUserOrganizations(username));
        },
        [dispatch, getUserInfo, username]
    );
    const handleUsernameChange = useCallback(
        (e: any) => {
            dispatch(setGithubUsername(e.target.value));
        },
        [setGithubUsername]
    );

    const isLoading = userRepositoriesLoading || userOrganizationsLoading;

    return (
        <Grid container direction="column" spacing={3}>
            <SearchForm
                username={username}
                isLoading={isLoading}
                onSearchClicked={handleSearch}
                onUsernameChanged={handleUsernameChange}
            />
            <Grid item container direction="row" spacing={3}>
                <Grid item md={6} xs={12}>
                    <Repositories
                        isLoading={userRepositoriesLoading}
                        userRepositories={userRepositories}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Organizations
                        isLoading={userOrganizationsLoading}
                        userOrganizations={userOrganizations}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomePage;
