import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, AUTHENTICATED_SUCCESS, AUTHENTICATED_FAIL, MESSAGE_SUCCESS, MESSAGE_FAIL } from "../actions/types";

const initialState = {
    isAuthenticated: null,
    username: '',
    error: {},
    success: {
        success: ''
    },
}

export default function(state=initialState, action){
    const { type, payload } = action;

    switch (type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: payload.authState,
                username: payload.username,
                error: {}
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: payload.authState,
                username: payload.username,
                error: payload.error || {}
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                error: {},
                success: payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                username: payload,
                error: ''
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                username: '',
                error: {}
            }
        case MESSAGE_SUCCESS:
            return {
                ...state,
                error: {},
                success: payload
            }
        case MESSAGE_FAIL:
            return {
                ...state,
                error: payload
            }
        case REGISTER_FAIL:
            return {
                ...state,
                error: payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: payload
            }
        case LOGOUT_FAIL:
            return state
        default:
            return state
    }
}
