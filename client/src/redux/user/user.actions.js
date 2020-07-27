import UserActionTypes from './user.types';

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});