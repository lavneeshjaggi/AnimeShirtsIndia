import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    loading: true
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                loading: false
            }
        case UserActionTypes.SIGN_UP_FAILURE: 
            return {
                ...state,
                error: action.payload,
                loading: false 
            } 
        default:
            return state
    }
}

export default userReducer;