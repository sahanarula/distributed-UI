import { call, put } from 'redux-saga/effects';
import { ActionTypes, Actions } from '../actions';
import { getAllDevice } from './utils';

// All data sagas to add to middleware.
export default [
    [ActionTypes.GET_DEVICE, getDevice]
];

// Do Login
function* getDevice ({ payload }) {
    yield put(Actions.loadingDevice());

    const response = yield call(getAllDevice);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.loadedDevice({ data: response.data }));
    }
}