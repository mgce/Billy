import {billService} from 'Services';

export const types = {
    GET_REQUEST: 'BILL_GET_REQUEST',
    GET_SUCCESS: 'BILL_GET_SUCCESS',
    GET_FAILURE: 'BILL_GET_FAILURE'
};

const initialState = {
    items: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch(action.type){
        case types.GET_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.GET_SUCCESS:
        return {
            ...state,
            loading: false,
            items: action.items
        };
        case types.GET_FAILURE:
        return {
            ...state,
            loading: false,
            items: []
        };
        default:
            return state;
    }
}

export const actions = {
    getAll
}

function getAll(){
    return dispatch => {
        dispatch(request());
        billService.getAll().then(items => {
            dispatch(success(items));
        }, error => {
            dispatch(failure(error))
        })
    }

    function request(){ return { type: types.GET_REQUEST}}
    function success(items) { return { type: types.GET_SUCCESS, items } }
    function failure(error) { return { type: types.GET_FAILURE, error } }
}
