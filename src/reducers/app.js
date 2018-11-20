import { ActionTypes } from '../actions';

const defaultState = {
    inTraffic: false,
    isInitialized: false,
    isAuthenticated: false,
    email: "sahiln123@gmail.com",
    password: "helloworld",
    device: "mobile",
    isLocationLoaded: false
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

            case ActionTypes.DONE_LOGIN:
                return {
                    ...state,
                    isAuthenticated: true,
                    jwtToken: action.payload.token
                };

            case ActionTypes.LOADED_PROXIMITY:
                return {
                    ...state,
                    isLocationLoaded: true,
                    currentLocation: {
                        name: action.proximity.data.name,
                        id: action.proximity.data.id
                    }
                };

            default:
                return state;

        }

    } catch(error) {
        console.error(`Error in appState reducer: ${ error.message || error.code || error }`, error);
    }

};