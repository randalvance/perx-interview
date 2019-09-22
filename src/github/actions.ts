import {
    GET_USER_INFO_FAILURE,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
} from './action-types';
import { UserInfo } from './types';

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

export type ApplicationAction =
    | GetUserInfoRequestAction
    | GetUserInfoSuccessAction
    | GetUserInfoFailureAction;

export function getUserInfo(login: string): GetUserInfoRequestAction {
    return {
        type: GET_USER_INFO_REQUEST,
        payload: login,
    };
}
