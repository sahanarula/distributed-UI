/**
 * Reducers output the Redux state (models) for the app. They do not alter the
 * existing state, but generate modified state objects from the old state in
 * response to actions.
 *
 * http://redux.js.org/docs/basics/Reducers.html
 *
 **/
import { combineReducers } from 'redux';
import app from './app';
import device from './device';
import fragments from './fragments';

/*
 * Reducer aggregator
 */
export default combineReducers({
    /*
     * Populate reducers
     */
    app,
    device,
    fragments
});
