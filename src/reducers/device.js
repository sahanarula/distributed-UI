import { ActionTypes } from '../actions';

const defaultState = {
    devices: []
};


export default (state = defaultState, action) => {
    try {

        switch(action.type) {

            case ActionTypes.LOADED_DEVICE:
                return {
                    ...state,
                    devices: action.payload
                };

            case ActionTypes.DONE_REMOVE_DEVICE:
                const clonedDevices = state.devices;

                return {
                    ...state,
                    devices: clonedDevices.filter(dev => dev.id !== action.payload[0].id)
                };

            default:
                return state;

        }

    } catch(error) {
        console.error(`Error in deviceState reducer: ${ error.message || error.code || error }`, error);
    }

};