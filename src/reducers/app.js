import { ActionTypes } from '../actions';

const defaultState = {
    inTraffic: false,
    isInitialized: false,
    isAuthenticated: false
};


export default (state = defaultState, action) => {
    try {

        switch(action.type) {

            case ActionTypes.INITIALIZE_APP:
                return {
                    ...state,
                    inTraffic: true
                };

            case ActionTypes.ON_FORM_CHANGE:
                return {
                    ...state,
                    ...action.payload
                };

            default:
                return state;

        }

    } catch(error) {
        console.error(`Error in appState reducer: ${ error.message || error.code || error }`, error);
    }

};