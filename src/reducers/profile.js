import { LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAIL, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL } from "../actions/types";

const initialState = {
    first_name: '',
    last_name: '',
    other_name: '',
    email: '',
    phone: '',
    city: ''
}

export default function(state=initialState, action){
    const { type, payload } = action;

    switch (type) {
        case LOAD_PROFILE_SUCCESS:
            return {
                ...state,
                first_name: payload.first_name,
                last_name: payload.last_name,
                other_name: payload.other_name,
                email: payload.email,
                phone: payload.phone,
                city: payload.city,
                detail: null
            }
        case UPDATE_PROFILE_SUCCESS:
            return state
        case LOAD_PROFILE_FAIL:
            return {
                ...state,
                first_name: '',
                last_name: '',
                other_name: '',
                email: '',
                phone: '',
                city: '',
                detail: payload
            }
        case UPDATE_PROFILE_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}
