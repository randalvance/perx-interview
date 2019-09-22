import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import { githubReducer } from './github/reducer';

import './App.css';
import logo from './logo.svg';

const store = createStore(
    combineReducers({
        github: githubReducer,
    })
);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Hello World!</h1>
            </div>
        </Provider>
    );
};

export default App;
