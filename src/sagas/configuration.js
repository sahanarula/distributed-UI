import { call, put } from 'redux-saga/effects';
import { ActionTypes, Actions } from '../actions';
import { getAllLocations, removeLocation, updateLocation, createLocation, createConfiguration } from './utils';

// All data sagas to add to middleware.
export default [
    [ActionTypes.GET_LOCATIONS, getLocations],
    [ActionTypes.DO_CREATE_LOCATION, createNewLocation],
    [ActionTypes.DO_REMOVE_LOCATION, doRemoveLocation],
    [ActionTypes.DO_UPDATE_LOCATION, doUpdateLocation],
    [ActionTypes.DO_CREATE_CONFIGURATION, doCreateConfiguration]
];

// Get Locations
function* getLocations ({ payload }) {
    yield put(Actions.loadingLocations());

    const response = yield call(getAllLocations);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.loadedLocations(response.data));
    }
}

// Remove Location
function* doRemoveLocation ({ payload }) {
    yield put(Actions.doingRemoveLocation());

    const response = yield call(removeLocation, payload);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.doneRemoveLocation(response.data));
    }
}

// Update Location
function* doUpdateLocation ({ payload }) {
    yield put(Actions.doingUpdateLocation());
    const { id, ...rest } = payload;
    const response = yield call(updateLocation, id, rest);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.doneUpdateLocation(response.data));
    }
}

// Create Location
function* createNewLocation ({ payload }) {
    yield put(Actions.doingCreateLocation());

    const response = yield call(createLocation, payload);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.doneCreateLocation(response.data));
    }
}

function* doCreateConfiguration ({ payload }) {
    yield put(Actions.doingCreateConfiguration());

    const response = yield call(createConfiguration, payload);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.doneCreateConfiguration(response.data));
    }
}