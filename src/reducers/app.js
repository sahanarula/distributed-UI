import { ActionTypes } from '../actions';
window.DEVICE = "mobile";

const defaultState = {
    inTraffic: false,
    isInitialized: false,
    isAuthenticated: false,
    email: "sahiln123@gmail.com",
    password: "helloworld",
    device: "mobile",
    isLocationLoaded: false,
    forceUpdate: false
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
                window.DEVICE = state.device;
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
                        name: action.payload.data.name,
                        id: action.payload.data.id
                    }
                };

            case ActionTypes.SET_FORCE_UPDATE:
                return {
                    ...state,
                    forceUpdate: action.payload
                };

            default:
                return state;

        }

    } catch(error) {
        console.error(`Error in appState reducer: ${ error.message || error.code || error }`, error);
    }

};