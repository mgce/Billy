import {repository} from 'Services';

export const types = {
    GET_REQUEST: 'SUPPLIER_GET_REQUEST',
    GET_SUCCESS: 'SUPPLIER_GET_SUCCESS',
    GET_FAILURE: 'SUPPLIER_GET_FAILURE',
    ADD_REQUEST: 'SUPPLIER_ADD_REQUEST',
    ADD_SUCCESS: 'SUPPLIER_ADD_SUCCESS',
    ADD_FAILURE: 'SUPPLIER_ADD_FAILURE'
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
            items: action.item
        };
        case types.GET_FAILURE:
        return {
            ...state,
            loading: false,
            items: []
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
            items: [...items, action.item]
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
    getAllSuppliers,
    addSupplier
}

const url="/api/suppliers"

function addSupplier(supplier){
    return dispatch => {
        dispatch(request()); 
        repository.add(url, supplier).then(items => {
            dispatch(success(items));
        }, error => {
            dispatch(failure(error))
        })
    }

    function request(supplier){ return { type: types.ADD_REQUEST, supplier}}
    function success() { return { type: types.ADD_SUCCESS } }
    function failure(error) { return { type: types.ADD_FAILURE, error } }
}

function getAllSuppliers(){
    return dispatch => {
        dispatch(request());
        repository.getAll(url).then(items => {
            dispatch(success(items));
        }, error => {
            dispatch(failure(error))
        })
    }

    function request(){ return { type: types.GET_REQUEST}}
    function success(items) { return { type: types.GET_SUCCESS, items } }
    function failure(error) { return { type: types.GET_FAILURE, error } }
}
