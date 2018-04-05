export const types = {
    CHANGE_SIGN_TYPE: "SIGN/CHANGE_SIGN_TYPE"
};

export const initialState = {
    loginVisible: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case CHANGE_SIGN_TYPE:
            return {...state, loginVisible = !loginVisible}
    }
}

export const actions = {
    changeSignType: () => ({type:CHANGE_SIGN_TYPE})
}