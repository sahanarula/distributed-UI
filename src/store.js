/**
 * Aggregator of reducers, sagas to build a store for the app
 * returns a store which is passed down to the props
 *
 **/
import { applyMiddleware, createStore } from 'redux';
import allReducers from './reducers';
import { sagaMiddleware, sagas } from './sagas';
import logger from 'redux-logger';

let createStoreWithMiddleware;

export default (initialState) => {
    if (process.env.NODE_ENV === 'production') {
        createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
    } else {
        createStoreWithMiddleware = applyMiddleware(sagaMiddleware, logger)(createStore);
    }

    let store = createStoreWithMiddleware(allReducers, initialState);

    // Start all sagas.
    for (let saga of sagas) {
        sagaMiddleware.run(saga);
    }

    return store;
}
