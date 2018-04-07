export const types = {
    LOGIN_REQUEST: "LOGIN/LOGIN_REQUEST",
    LOGIN_SUCCESS: "LOGIN/LOGIN_SUCCESS",
    LOGIN_ERROR: "LOGIN/LOGIN_ERROR",
};

export const initialState = {
    username: '',
    password: '',
}

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
        case types.LOGIN_ERROR:
            return {}
        default:
            return state;
    }
}

export const actions = {
    submitLogin: () => ({type: types.SUBMIT_LOGIN, username, login}),
    handleLoginOnBlur: () => ({type: types.HANDLE_LOGIN_ON_BLUR})
}