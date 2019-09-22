import { call, put, takeEvery } from 'redux-saga/effects';

import {
    GET_USER_INFO_FAILURE,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
} from './action-types';
import {
    GetUserInfoFailureAction,
    GetUserInfoRequestAction,
    GetUserInfoSuccessAction,
} from './actions';
import * as api from './api';

export function* fetchData(action: GetUserInfoRequestAction) {
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

export function* githubSaga() {
    yield takeEvery(GET_USER_INFO_REQUEST, fetchData);
}
