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

    yield call(login, payload);

    yield put(Actions.doneLogin());
}