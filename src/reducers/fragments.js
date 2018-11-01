import { ActionTypes } from '../actions';

const defaultState = {
    fragments: []
};


export default (state = defaultState, action) => {
    try {

        switch(action.type) {

            case ActionTypes.LOADED_FRAGMENTS:
                return {
                    ...state,
                    fragments: action.payload
                };

            case ActionTypes.DONE_REMOVE_FRAGMENT:
                var clonedFragments = state.fragments;

                return {
                    ...state,
                    fragments: clonedFragments.filter(fragment => fragment.id !== action.payload[0].id)
                };

            case ActionTypes.DONE_UPDATE_FRAGMENT:
                var clonedFragments = state.fragments;
                let newFragments = clonedFragments.map(fragment => {
                    if (fragment.id === action.payload[0].id) {
                        return action.payload[0];
                    }

                    return fragment;
                });

                return {
                    ...state,
                    fragments: newFragments
                };

            case ActionTypes.DONE_CREATE_FRAGMENT:
                return {
                    ...state,
                    fragments: [
                        ...state.fragments,
                        action.payload
                    ]
                };


            default:
                return state;

        }

    } catch(error) {
        console.error(`Error in fragmentState reducer: ${ error.message || error.code || error }`, error);
    }

};