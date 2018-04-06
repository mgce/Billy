export const types = {
    CHANGE_SIGN_TYPE: "SIGN/CHANGE_SIGN_TYPE",
    SUBMIT_LOGIN: "SIGN/SUBMIT_LOGIN",
    HANDLE_LOGIN_ON_BLUR: "SIGN/HANDLE_LOGIN_ON_BLUR"
};

export const initialState = {
    loginVisible: false,
    loginForm:{
        username: '',
        password: '',
        touched: false
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_SIGN_TYPE:
            return {...state, loginVisible: !state.loginVisible}
        case types.SUBMIT_LOGIN:
            return;
        case types.HANDLE_LOGIN_ON_BLUR:
            return {...state, touched: true}
        default:
            return state;
    }
}

export const actions = {
    changeSignType: () => ({type: types.CHANGE_SIGN_TYPE}),
    submitLogin: () => ({type: types.SUBMIT_LOGIN, username, login}),
    handleLoginOnBlur: () => ({type: types.HANDLE_LOGIN_ON_BLUR})
}