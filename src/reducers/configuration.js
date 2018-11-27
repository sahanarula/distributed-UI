import { ActionTypes } from '../actions';

const defaultState = {
    locations: [],
    isLoaded: false
};


export default (state = defaultState, action) => {
    var clonedLocations,
        newLocations;

    try {

        switch(action.type) {

            case ActionTypes.DONE_CREATE_LOCATION:
                return {
                    ...state,
                    locations: [
                        ...state.locations,
                        {
                            ...action.payload,
                            configurations: []
                        }
                    ]
                };

            case ActionTypes.LOADED_LOCATIONS:
                return {
                    ...state,
                    isLoaded: true,
                    locations: action.payload
                };

            case ActionTypes.DONE_REMOVE_LOCATION:
                clonedLocations = state.locations;

                return {
                    ...state,
                    locations: clonedLocations.filter(location => location.id !== action.payload[0].id)
                };

            case ActionTypes.DONE_UPDATE_LOCATION:
                clonedLocations = state.locations;
                newLocations = clonedLocations.map(location => {
                    if (location.id === action.payload[0].id) {
                        return {
                            ...location,
                            ...action.payload[0]
                        }
                    }

                    return location;
                });

                return {
                    ...state,
                    locations: newLocations
                };

            case ActionTypes.DONE_CREATE_CONFIGURATION:
                clonedLocations = state.locations;
                newLocations = clonedLocations.map(location => {
                    if (location.id === action.payload.location) {
                        return {
                            ...location,
                            configurations: [
                                ...location.configurations,
                                action.payload
                            ]
                        }
                    }

                    return location;
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