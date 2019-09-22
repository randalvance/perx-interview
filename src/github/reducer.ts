import {
    ApplicationAction,
    ApplicationState,
    GET_REPOSITORIES_REQUEST,
} from './types';

const initialState: ApplicationState = {};

export const githubReducer = (
    state: ApplicationState = initialState,
    action: ApplicationAction
): ApplicationState => {
    switch (action.type) {
        case GET_REPOSITORIES_REQUEST:
            return {};
        default:
            return state;
    }
};
