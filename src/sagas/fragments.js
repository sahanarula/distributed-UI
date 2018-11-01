import { call, put } from 'redux-saga/effects';
import { ActionTypes, Actions } from '../actions';
import { getAllFragments, removeFragment, updateFragment, createFragment } from './utils';

// All data sagas to add to middleware.
export default [
    [ActionTypes.GET_FRAGMENTS, getFragments],
    [ActionTypes.DO_CREATE_FRAGMENT, createNewFragment],
    [ActionTypes.DO_REMOVE_FRAGMENT, doRemoveFragment],
    [ActionTypes.DO_UPDATE_FRAGMENT, doUpdateFragment]
];

// Get Fragments
function* getFragments ({ payload }) {
    yield put(Actions.loadingFragments());

    const response = yield call(getAllFragments);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.loadedFragments(response.data));
    }
}

// Remove Fragment
function* doRemoveFragment ({ payload }) {
    yield put(Actions.doingRemoveFragment());

    const response = yield call(removeFragment, payload);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.doneRemoveFragment(response.data));
    }
}

// Update Fragment
function* doUpdateFragment ({ payload }) {
    yield put(Actions.doingUpdateFragment());
    const response = yield call(updateFragment, payload.id, { name: payload.name, url: payload.url });

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.doneUpdateFragment(response.data));
    }
}

// Create Fragment
function* createNewFragment ({ payload }) {
    yield put(Actions.doingCreateFragment());

    const response = yield call(createFragment, payload);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.doneCreateFragment(response.data));
    }
}