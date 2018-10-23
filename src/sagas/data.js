// import { call, put } from 'redux-saga/effects';
import { ActionTypes } from '../actions';

// All data sagas to add to middleware.
export default [
    // [ActionTypes.LOAD_DATA, loadData]
    [ActionTypes.INITIALIZE_APP, initializeApp]
];

// Load Data
// function* loadData () {
    // yield put(Actions.loadingAllMonitorListData());
    //
    // yield [call(getAllPopulatedCollections), call(getEnvironments)];
    //
    // yield put(Actions.loadedAllMonitorListData());
// }


function initializeApp () {
    console.log('initialize app');
}