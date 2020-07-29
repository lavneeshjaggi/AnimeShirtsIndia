import UserActionTypes from './user.types';

export const signInSuccess = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});