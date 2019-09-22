import { ApplicationAction, GET_REPOSITORIES_REQUEST } from './types';

export function getRepositories(githubUser: string): ApplicationAction {
    return {
        type: GET_REPOSITORIES_REQUEST,
        payload: githubUser,
    };
}
