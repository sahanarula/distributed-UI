/*global io*/

import { call, put } from 'redux-saga/effects';
import { ActionTypes, Actions } from '../actions';
import { login } from './utils';

// All data sagas to add to middleware.
export default [
    [ActionTypes.DO_LOGIN, doLogin]
];

// Do Login
function* doLogin ({ payload }) {
    yield put(Actions.doingLogin());

    const response = yield call(login, payload);
    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        io.sails.headers = {
            Authorization: "Bearer " + response.data.token
        };
        yield put(Actions.doneLogin(response.data));
    }
}