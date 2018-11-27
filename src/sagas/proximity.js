/* global io */
import { eventChannel } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects'

import { ActionTypes, Actions } from '../actions';
import {getProximity, updateProximity} from './utils';

// All data sagas to add to middleware.
export default [
    [ActionTypes.CONNECT_PROXIMITY, connectProximity],
    [ActionTypes.DO_UPDATE_PROXIMITY, doUpdateProximity]
];

function webSocketInitChannel () {
    return eventChannel(emitter => {
        getProximity().then((payload) => {
            emitter({ type: ActionTypes.LOADED_PROXIMITY, payload });
            io.socket.on('user', (payload, jwRes) => {
                console.log("updated user");
                emitter({ type: ActionTypes.SET_FORCE_UPDATE, payload: true });
                return emitter({ type: ActionTypes.LOADED_PROXIMITY, payload });
            })
        });

        return () => {
            console.log('Socket off')
        }
    });
}

// Connect Proximity
function* connectProximity ({ payload }) {
    const channel = yield call(webSocketInitChannel);

    while (true) {
        const action = yield take(channel);
        yield put(action);
    }
}

// Update Proximity
function* doUpdateProximity ({ payload }) {
    yield put(Actions.doingUpdateProximity());

    const response = yield call(updateProximity, payload);

    if (!response.successful) {
        yield put(Actions.showMessage({type: "error", code: response.code}));
    } else {
        yield put(Actions.doneUpdateProximity(response.data));
    }
}