import { ActionTypes } from '../actions';

const defaultState = {
    locations: []
};


export default (state = defaultState, action) => {
    try {

        switch(action.type) {

            case ActionTypes.DONE_CREATE_LOCATION:
                return {
                    ...state,
                    locations: [
                        ...state.locations,
                        action.payload
                    ]
                };

            case ActionTypes.LOADED_LOCATIONS:
                return {
                    ...state,
                    locations: action.payload
                };

            case ActionTypes.DONE_REMOVE_LOCATION:
                var clonedLocations = state.locations;

                return {
                    ...state,
                    locations: clonedLocations.filter(location => location.id !== action.payload[0].id)
                };

            case ActionTypes.DONE_UPDATE_LOCATION:
                var clonedLocations = state.locations;
                let newLocations = clonedLocations.map(fragment => {
                    if (fragment.id === action.payload[0].id) {
                        return action.payload[0];
                    }

                    return fragment;
                });

                return {
                    ...state,
                    locations: newLocations
                };


            default:
                return state;

        }

    } catch(error) {
        console.error(`Error in configurationState reducer: ${ error.message || error.code || error }`, error);
    }

};