export const types = {
    SUBMIT_LOGIN: "SIGN/SUBMIT_LOGIN",
    HANDLE_LOGIN_ON_BLUR: "SIGN/HANDLE_LOGIN_ON_BLUR"
};

export const initialState = {
    username: '',
    password: '',
    touched: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case types.SUBMIT_LOGIN:
            return;
        case types.HANDLE_LOGIN_ON_BLUR:
            return {...state, touched: true}
        default:
            return state;
    }
}

export const actions = {
    submitLogin: () => ({type: types.SUBMIT_LOGIN, username, login}),
    handleLoginOnBlur: () => ({type: types.HANDLE_LOGIN_ON_BLUR})
}