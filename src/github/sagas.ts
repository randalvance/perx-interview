import { call, put, takeEvery } from 'redux-saga/effects';

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
} from './action-types';
import {
    GetUserInfoFailureAction,
    GetUserInfoRequestAction,
    GetUserInfoSuccessAction,
    GetUserOrganizationsFailureAction,
    GetUserOrganizationsRequestAction,
    GetUserOrganizationsSuccessAction,
    GetUserRepositoriesFailureAction,
    GetUserRepositoriesRequestAction,
    GetUserRepositoriesSuccessAction,
} from './actions';
import * as api from './api';

export function* getUserInfo(action: GetUserInfoRequestAction) {
    try {
        const data = yield call(api.getUserInfo, action.payload);
        yield put<GetUserInfoSuccessAction>({
            type: GET_USER_INFO_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put<GetUserInfoFailureAction>({
            type: GET_USER_INFO_FAILURE,
            payload: error,
        });
    }
}
export function* getUserRepositories(action: GetUserRepositoriesRequestAction) {
    try {
        const data = yield call(api.getUserRepositories, action.payload);
        yield put<GetUserRepositoriesSuccessAction>({
            type: GET_USER_REPOSITORIES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put<GetUserRepositoriesFailureAction>({
            type: GET_USER_REPOSITORIES_FAILURE,
            payload: error,
        });
    }
}
export function* getUserOrganizations(
    action: GetUserOrganizationsRequestAction
) {
    try {
        const data = yield call(api.getUserOrganizations, action.payload);
        yield put<GetUserOrganizationsSuccessAction>({
            type: GET_USER_ORGANIZATIONS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put<GetUserOrganizationsFailureAction>({
            type: GET_USER_ORGANIZATIONS_FAILURE,
            payload: error,
        });
    }
}

export function* githubSaga() {
    yield takeEvery(GET_USER_INFO_REQUEST, getUserInfo);
    yield takeEvery(GET_USER_REPOSITORIES_REQUEST, getUserRepositories);
    yield takeEvery(GET_USER_ORGANIZATIONS_REQUEST, getUserOrganizations);
}
