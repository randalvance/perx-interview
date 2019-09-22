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
import { UserInfo, UserOrganization, UserRepository } from './types';

export interface SetGithubUsernameAction {
    type: typeof SET_GITHUB_USERNAME;
    payload: string;
}

export interface GetUserInfoRequestAction {
    type: typeof GET_USER_INFO_REQUEST;
    payload: string;
}

export interface GetUserInfoSuccessAction {
    type: typeof GET_USER_INFO_SUCCESS;
    payload: UserInfo;
}

export interface GetUserInfoFailureAction {
    type: typeof GET_USER_INFO_FAILURE;
    payload: Error;
}
export interface GetUserRepositoriesRequestAction {
    type: typeof GET_USER_REPOSITORIES_REQUEST;
    payload: string;
}

export interface GetUserRepositoriesSuccessAction {
    type: typeof GET_USER_REPOSITORIES_SUCCESS;
    payload: UserRepository[];
}

export interface GetUserRepositoriesFailureAction {
    type: typeof GET_USER_REPOSITORIES_FAILURE;
    payload: Error;
}
export interface GetUserOrganizationsRequestAction {
    type: typeof GET_USER_ORGANIZATIONS_REQUEST;
    payload: string;
}

export interface GetUserOrganizationsSuccessAction {
    type: typeof GET_USER_ORGANIZATIONS_SUCCESS;
    payload: UserOrganization[];
}

export interface GetUserOrganizationsFailureAction {
    type: typeof GET_USER_ORGANIZATIONS_FAILURE;
    payload: Error;
}
export type GithubActions =
    | SetGithubUsernameAction
    | GetUserInfoRequestAction
    | GetUserInfoSuccessAction
    | GetUserInfoFailureAction
    | GetUserRepositoriesSuccessAction
    | GetUserRepositoriesFailureAction
    | GetUserRepositoriesRequestAction
    | GetUserOrganizationsSuccessAction
    | GetUserOrganizationsFailureAction
    | GetUserOrganizationsRequestAction;

export const setGithubUsername = (login: string): SetGithubUsernameAction => ({
    type: SET_GITHUB_USERNAME,
    payload: login,
});

export const getUserInfo = (login: string): GetUserInfoRequestAction => ({
    type: GET_USER_INFO_REQUEST,
    payload: login,
});

export const getUserRepositories = (
    login: string
): GetUserRepositoriesRequestAction => ({
    type: GET_USER_REPOSITORIES_REQUEST,
    payload: login,
});

export const getUserOrganizations = (
    login: string
): GetUserOrganizationsRequestAction => ({
    type: GET_USER_ORGANIZATIONS_REQUEST,
    payload: login,
});
