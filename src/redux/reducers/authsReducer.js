import { ActionTypes } from "../constants/action-types";

const INITIAL_STATE = {
    user: null,
    isFetching: true,
    error: false,
};

const AuthReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGIN_START:
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                user: payload,
                isFetching: false,
                error: false,
            };
        case ActionTypes.LOGIN_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: true,
            };
        case ActionTypes.LOGOUT:
            return {
                user: null,
                isFetching: false,
                error: false,
            };
        default:
            return state;
    }
};

export default AuthReducer;