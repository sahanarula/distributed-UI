import { ActionTypes } from '../actions';

const defaultState = {
    devices: [],
    isLoaded: false
};


export default (state = defaultState, action) => {
    try {

        switch(action.type) {

            case ActionTypes.LOADED_DEVICE:
                return {
                    ...state,
                    devices: action.payload,
                    isLoaded: true
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