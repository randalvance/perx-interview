import { combineReducers } from 'redux';
import { githubReducer, GithubState } from '../github/reducer';

export interface ApplicationState {
    github: GithubState;
}

export default combineReducers<ApplicationState>({
    github: githubReducer,
});
