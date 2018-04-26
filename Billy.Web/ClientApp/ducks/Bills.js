import {billService} from 'Services';

export const types = {
    GET_REQUEST: 'BILL_GET_REQUEST',
    GET_SUCCESS: 'BILL_GET_SUCCESS',
    GET_FAILURE: 'BILL_GET_FAILURE',
    ADD_REQUEST: 'BILL_ADD_REQUEST',
    ADD_SUCCESS: 'BILL_ADD_SUCCESS',
    ADD_FAILURE: 'BILL_ADD_FAILURE'
};

const initialState = {
    bills: [],
    loading: true,
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
            bills: action.bills
        };
        case types.GET_FAILURE:
        return {
            ...state,
            loading: false,
            bills: []
        };
        case types.ADD_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.ADD_SUCCESS:
        return {
            ...state,
            loading: false,
            bills: [...bills, action.bill]
        };
        case types.ADD_FAILURE:
        return {
            ...state,
            loading: false,
        };
        default:
            return state;
    }
}

export const actions = {
    getAll,
    add
}

function add(bill){
    return dispatch => {
        dispatch(request()); 
        billService.add(bill).then(items => {
            dispatch(success(items));
        }, error => {
            dispatch(failure(error))
        })
    }

    function request(bill){ return { type: types.ADD_REQUEST, bill}}
    function success() { return { type: types.ADD_SUCCESS } }
    function failure(error) { return { type: types.ADD_FAILURE, error } }
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
    function success(bills) { return { type: types.GET_SUCCESS, bills } }
    function failure(error) { return { type: types.GET_FAILURE, error } }
}
