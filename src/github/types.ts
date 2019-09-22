export interface ApplicationState {

}

export const GET_REPOSITORIES_REQUEST = 'GET_REPOSITORIES_REQUEST';
export const GET_REPOSITORIES_SUCCESS = 'GET_REPOSITORIES_SUCCESS';

interface GetRepositoriesAction {
    type: typeof GET_REPOSITORIES_REQUEST,
    payload: string,
}

export type ApplicationAction = GetRepositoriesAction;

