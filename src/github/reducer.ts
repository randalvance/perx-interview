import {
    GET_USER_INFO_FAILURE,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_ORGANIZATIONS_FAILURE,
    GET_USER_ORGANIZATIONS_REQUEST,
    GET_USER_ORGANIZATIONS_SUCCESS,
    GET_USER_REPOSITORIES_FAILURE,
    GET_USER_REPOSITORIES_REQUEST,
    GET_USER_REPOSITORIES_SUCCESS,
    SET_GITHUB_USERNAME,
} from './action-types';
import { GithubActions, GetUserRepositoriesSuccessAction } from './actions';
import { UserInfo, UserOrganization, UserRepository } from './types';

export interface GithubState {
    username: string;
    userInfo: UserInfo | null;
    userRepositories: UserRepository[];
    userOrganizations: UserOrganization[];
    userInfoLoading: boolean;
    userRepositoriesLoading: boolean;
    userOrganizationsLoading: boolean;
    hasApiError: boolean;
}

export const initialState: GithubState = {
    username: '',
    userInfo: null,
    userRepositories: [],
    userOrganizations: [],
    userRepositoriesLoading: false,
    userOrganizationsLoading: false,
    userInfoLoading: false,
    hasApiError: false,
};

export const githubReducer = (
    state: GithubState = initialState,
    action: GithubActions
): GithubState => {
    switch (action.type) {
        case SET_GITHUB_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                userInfoLoading: true,
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                userInfoLoading: false,
                userInfo: action.payload,
            };
        case GET_USER_INFO_FAILURE:
            return {
                ...state,
                userInfoLoading: true,
                hasApiError: true,
            };
        case GET_USER_REPOSITORIES_REQUEST:
            return {
                ...state,
                userRepositoriesLoading: true,
            };
        case GET_USER_REPOSITORIES_SUCCESS:
            return {
                ...state,
                userRepositoriesLoading: false,
                userRepositories: action.payload,
            };
        case GET_USER_REPOSITORIES_FAILURE:
            return {
                ...state,
                userRepositoriesLoading: false,
                hasApiError: true,
            };
        case GET_USER_ORGANIZATIONS_REQUEST:
            return {
                ...state,
                userOrganizationsLoading: true,
            };
        case GET_USER_ORGANIZATIONS_SUCCESS:
            return {
                ...state,
                userOrganizationsLoading: false,
                userOrganizations: action.payload,
            };
        case GET_USER_ORGANIZATIONS_FAILURE:
            return {
                ...state,
                userOrganizationsLoading: false,
                hasApiError: true,
            };
        default:
            return state;
    }
};
