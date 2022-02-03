import { ActionTypes } from "../constants/action-types";

export const loginStart = () => {
    return {
        type: ActionTypes.LOGIN_START,
    }
};

export const loginSuccess = (user) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: user,
    }
};

export const loginFailure = () => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
    }
};

//logout

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT,
    }
};
