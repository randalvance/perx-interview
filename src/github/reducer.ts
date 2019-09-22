import {
    GET_USER_INFO_FAILURE,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
} from './action-types';
import { ApplicationAction } from './actions';
import { UserInfo } from './types';

export interface GithubState {
    userInfoLoading: boolean;
    hasApiError: boolean;
    userInfo: UserInfo | null;
}

const initialState: GithubState = {
    userInfoLoading: false,
    hasApiError: false,
    userInfo: null,
};

export const githubReducer = (
    state: GithubState = initialState,
    action: ApplicationAction
): GithubState => {
    switch (action.type) {
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
        default:
            return state;
    }
};
