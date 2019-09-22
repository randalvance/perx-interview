import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isEmpty, times } from 'lodash';

import {
    Button,
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { ApplicationState } from '../application/reducers';
import {
    getUserInfo,
    getUserOrganizations,
    getUserRepositories,
    setGithubUsername,
} from '../github/actions';
import { UserOrganization, UserRepository } from '../github/types';

import { navigateToUrl } from '../application/utils/navigation';

type State = ApplicationState;

const useStyles = makeStyles(theme => ({
    button: {
        marginTop: theme.spacing(2),
        height: 50,
    },
    usernameInput: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    infoSection: {
        padding: theme.spacing(3),
    },
    emptyText: {
        marginTop: theme.spacing(1),
    },
}));

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
    const handleClick = useCallback(
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

    const classes = useStyles();

    const isLoading = userRepositoriesLoading || userOrganizationsLoading;

    return (
        <Grid container direction="column" spacing={3}>
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
                        onChange={handleUsernameChange}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        fullWidth
                        onClick={handleClick}
                        disabled={isEmpty(username) || isLoading}
                    >
                        Get User Information
                    </Button>
                </Grid>
            </Grid>
            <Grid item container direction="row" spacing={3}>
                <Grid item md={6} xs={12}>
                    <Paper className={classes.infoSection}>
                        <Typography variant="h5" component="h2">
                            Repositories
                        </Typography>
                        {!isLoading && isEmpty(userRepositories) && (
                            <Typography
                                className={classes.emptyText}
                                variant="body1"
                                component="p"
                            >
                                No Repositories (Yet)
                            </Typography>
                        )}
                        {userRepositoriesLoading ? (
                            times(10).map(id => (
                                <Skeleton key={id} variant="text" />
                            ))
                        ) : (
                            <List>
                                {userRepositories.map(repo => (
                                    <ListItem
                                        key={repo.id}
                                        button
                                        onClick={() =>
                                            navigateToUrl(repo.html_url)
                                        }
                                    >
                                        <ListItemText
                                            primary={repo.full_name}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Paper>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Paper className={classes.infoSection}>
                        <Typography variant="h5" component="h2">
                            Organizations
                        </Typography>
                        {!isLoading && isEmpty(userOrganizations) && (
                            <Typography
                                className={classes.emptyText}
                                variant="body1"
                                component="p"
                            >
                                No Organizations (Yet)
                            </Typography>
                        )}
                        {userOrganizationsLoading ? (
                            times(10).map(id => (
                                <Skeleton key={id} variant="text" />
                            ))
                        ) : (
                            <List>
                                {userOrganizations.map(org => (
                                    <ListItem
                                        key={org.id}
                                        button
                                        onClick={() => navigateToUrl(org.url)}
                                    >
                                        <ListItemText primary={org.login} />
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomePage;
