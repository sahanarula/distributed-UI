import { call, put } from 'redux-saga/effects';
import { ActionTypes, Actions } from '../actions';
import { getAllDevice, removeDevice } from './utils';

// All data sagas to add to middleware.
export default [
    [ActionTypes.GET_DEVICE, getDevice],
    [ActionTypes.DO_REMOVE_DEVICE, doRemoveDevice]
];

// Do Login
function* getDevice ({ payload }) {
    yield put(Actions.loadingDevice());

    const response = yield call(getAllDevice);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.loadedDevice(response.data));
    }
}

// Remove Device
function* doRemoveDevice ({ payload }) {
    yield put(Actions.doingRemoveDevice());

    const response = yield call(removeDevice, payload);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.doneRemoveDevice(response.data));
    }
}