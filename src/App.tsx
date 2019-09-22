import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import applicationReducers from './application/reducers';
import applicationSagas from './application/sagas';

import MainWrapper from './application/components/MainWrapper';
import HomePage from './pages/HomePage';

import './App.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(applicationReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(applicationSagas);

const App: React.FC<{}> = () => {
    return (
        <Provider store={store}>
            <MainWrapper>
                <HomePage />
            </MainWrapper>
        </Provider>
    );
};

export default App;
