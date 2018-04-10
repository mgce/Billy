import {userService} from 'Services';

export const types = {
    REGISTER_REQUEST: "REGISTER_REQUEST/REGISTER_REQUEST",
    REGISTER_SUCCESS: "REGISTER_REQUEST/REGISTER_SUCCESS",
    REGISTER_ERROR: "REGISTER_REQUEST/REGISTER_ERROR",
};

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type){
        case types.REGISTER_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case types.REGISTER_SUCCESS:
        return {
            loggedIn: true,
            user: action.user
        };
        case types.REGISTER_ERROR:
            return {}
        default:
            return state;
    }
}

export const actions = {
    register
}

function register (user){
    return dispatch => {
        dispatch(request(user))

        userService.register(user)
        .then(user =>{
            dispatch(success(user));

        },error =>{
            dispatch(failure(error));
        })
    }

    function request(user) { return { type: types.REGISTER_REQUEST, user } }
    function success(user) { return { type: types.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: types.REGISTER_FAILURE, error } }
}