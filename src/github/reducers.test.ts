import {
    getUserOrganizations,
    getUserRepositories,
    GithubActions,
    setGithubUsername,
    GetUserRepositoriesSuccessAction,
    GetUserOrganizationsSuccessAction,
    GetUserOrganizationsFailureAction,
    GetUserRepositoriesFailureAction,
} from './actions';
import { githubReducer as reducer, GithubState, initialState } from './reducer';
import {
    GET_USER_REPOSITORIES_SUCCESS,
    GET_USER_ORGANIZATIONS_SUCCESS,
    GET_USER_ORGANIZATIONS_FAILURE,
    GET_USER_REPOSITORIES_FAILURE,
} from './action-types';
import { UserRepository, UserOrganization } from './types';

describe('github reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {} as GithubActions)).toEqual(initialState);
    });

    it('should handle setting of username', () => {
        expect(
            reducer({} as GithubState, setGithubUsername('randalvance'))
        ).toEqual({
            username: 'randalvance',
        } as Partial<GithubState>);
    });

    it('should set loading to true when requesting repositories', () => {
        expect(
            reducer({} as GithubState, getUserRepositories('randalvance'))
        ).toEqual({
            userRepositoriesLoading: true,
        } as Partial<GithubState>);
    });

    it('should set loading to false and hasApiError to true when requesting repositories failed', () => {
        expect(
            reducer(
                {} as GithubState,
                {
                    type: GET_USER_REPOSITORIES_FAILURE,
                    payload: new Error(),
                } as GetUserRepositoriesFailureAction
            )
        ).toEqual({
            userRepositoriesLoading: false,
            hasApiError: true,
        } as Partial<GithubState>);
    });

    it('should set loading to false and hasApiError to true when requesting organizations failed', () => {
        expect(
            reducer(
                {} as GithubState,
                {
                    type: GET_USER_ORGANIZATIONS_FAILURE,
                    payload: new Error(),
                } as GetUserOrganizationsFailureAction
            )
        ).toEqual({
            userOrganizationsLoading: false,
            hasApiError: true,
        } as Partial<GithubState>);
    });

    it('should set loading to false when requesting organizations failed', () => {
        expect(
            reducer({} as GithubState, getUserOrganizations('randalvance'))
        ).toEqual({
            userOrganizationsLoading: true,
        } as Partial<GithubState>);
    });

    it('should set repositories when request is complete', () => {
        const repositories = [
            { id: 1, full_name: 'Repo 1' } as Partial<UserRepository>,
            { id: 2, full_name: 'Repo 2' } as Partial<UserRepository>,
        ];
        expect(
            reducer(
                {} as GithubState,
                {
                    type: GET_USER_REPOSITORIES_SUCCESS,
                    payload: repositories,
                } as GetUserRepositoriesSuccessAction
            )
        ).toEqual({
            userRepositoriesLoading: false,
            userRepositories: repositories,
        } as Partial<GithubState>);
    });

    it('should set organizations when request is complete', () => {
        const organizations = [
            { id: 1, description: 'Org 1' } as Partial<UserOrganization>,
            { id: 2, description: 'Org 2' } as Partial<UserOrganization>,
        ];
        expect(
            reducer(
                {} as GithubState,
                {
                    type: GET_USER_ORGANIZATIONS_SUCCESS,
                    payload: organizations,
                } as GetUserOrganizationsSuccessAction
            )
        ).toEqual({
            userOrganizationsLoading: false,
            userOrganizations: organizations,
        } as Partial<GithubState>);
    });
});
