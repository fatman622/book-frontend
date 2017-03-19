import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise)
);

ReactDOM.render(
    <Provider store = { store }>
        <Router history = { browserHistory } routes = { routes }/>
    </Provider>,
    document.getElementById('root')
);
