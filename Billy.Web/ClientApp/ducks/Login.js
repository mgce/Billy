import {userService} from 'Services';
import {push} from 'react-router-redux';

export const types = {
    LOGIN_REQUEST: "LOGIN/LOGIN_REQUEST",
    LOGIN_SUCCESS: "LOGIN/LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN/LOGIN_FAILURE",
};

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn: true, user} : {};

export default (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case types.LOGIN_SUCCESS:
        return {
            loggedIn: true,
            user: action.user
        };
        case types.LOGIN_FAILURE:
            return {}
        default:
            return state;
    }
}

export const actions = {
    login
}

function login (username, password){
    return dispatch => {
        dispatch(request({username}));

        userService.login(username, password)
        .then(user => {
            dispatch(success(user));
            dispatch(push('/'));
        },
        error => {
            dispatch(failure(error));
        })

    }

    function request(user){ return { type: types.LOGIN_REQUEST, user}}
    function success(user) { return { type: types.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: types.LOGIN_FAILURE, error } }
}