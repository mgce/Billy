export const types = {
    CHANGE_SIGN_TYPE: "SIGN/CHANGE_SIGN_TYPE"
};

export const initialState = {
    loginVisible: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_SIGN_TYPE:
            return {...state, loginVisible: !state.loginVisible}
        default:
            return state;
    }
}

export const actions = {
    changeSignType: () => ({type: types.CHANGE_SIGN_TYPE})
}