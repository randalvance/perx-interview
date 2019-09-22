import { all, fork } from 'redux-saga/effects';

import { githubSaga } from '../github/sagas';

const configureSaga = (s: any) =>
    function* configureSagaGenerator() {
        yield all(s.map((saga: any) => fork(saga)));
    };

export default configureSaga([githubSaga]);
