export const types = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type){
        case types.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case types.ERROR:
        return {
            type: 'alert-danger',
            message: action.message
        };
        case types.CLEAR:
            return {}
        default:
            return state;
    }
}

export const actions = {
    
}

