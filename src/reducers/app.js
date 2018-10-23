import { ActionTypes } from '../actions';

const defaultState = {
    inTraffic: false,
    isInitialized: false
};


export default (state = defaultState, action) => {
    try {

        switch(action.type) {

            case ActionTypes.INITIALIZE_APP:
                console.log('Im here')
                return {
                    ...state,
                    inTraffic: true
                };

            default:
                return state;

        }

    } catch(error) {
        console.error(`Error in appState reducer: ${ error.message || error.code || error }`, error);
    }

};