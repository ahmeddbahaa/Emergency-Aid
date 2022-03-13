import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCEEDED,
    REGISTRATION_ERROR,
    CLEAR_REGISTRATION_DETAILS,
} from "../actions/types";

export default function users_reducer(state = {}, action) {
    switch (action.type) {
        // REGISTRATION
        case REGISTRATION_REQUEST:
            return { ...state, registrationRequest: true };
        case REGISTRATION_SUCCEEDED:
            return {
                ...state,
                registeredUser: action.payload,
                registrationSucceeded: true,
                registrationRequest: false,
            };
        case REGISTRATION_ERROR:
            return {
                ...state,
                registrationError: action.payload,
                registrationErrorOccurred: true,
                registrationRequest: false,
                registrationSucceeded: false,
            };
        case CLEAR_REGISTRATION_DETAILS:
            return {
                ...state,
                registeredUser: action.payload,
                registrationError: action.payload,
                registrationRequest: null,
                registrationSucceeded: null,
                registrationErrorOccurred: null,
            };
        default:
            return state;
    }
}
