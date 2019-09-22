import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../application/reducers';
import {
    getUserInfo,
    getUserOrganizations,
    getUserRepositories,
} from '../github/actions';
import { UserInfo, UserRepository, UserOrganization } from '../github/types';

type State = ApplicationState;

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

    return (
        <div>
            <h1>{userInfoLoading ? 'User is loading...' : 'Not Loading'}</h1>
            <button type="button" onClick={handleClick}>
                Get User Information
            </button>
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
        </div>
    );
};

export default HomePage;
