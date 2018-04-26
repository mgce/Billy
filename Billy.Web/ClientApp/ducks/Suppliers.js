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
    suppliers: [],
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
            suppliers: action.suppliers
        };
        case types.GET_FAILURE:
        return {
            ...state,
            loading: false,
            suppliers: []
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
            suppliers: [...suppliers, action.supplier]
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

const url="/api/supplier"

function addSupplier(supplier){
    return dispatch => {
        dispatch(request()); 
        repository.add(url, supplier).then(supplier => {
            dispatch(success(supplier));
        }, error => {
            dispatch(failure(error))
        })
    }

    function request(supplier){ return { type: types.ADD_REQUEST, supplier}}
    function success(supplier) { return { type: types.ADD_SUCCESS, supplier } }
    function failure(error) { return { type: types.ADD_FAILURE, error } }
}

function getAllSuppliers(){
    return dispatch => {
        dispatch(request());
        repository.getAll(url).then(handleResponse).then(suppliers => {
            dispatch(success(suppliers));
        }, error => {
            dispatch(failure(error))
        })
    }

    function request(){ return { type: types.GET_REQUEST}}
    function success(suppliers) { return { type: types.GET_SUCCESS, suppliers } }
    function failure(error) { return { type: types.GET_FAILURE, error } }
}

const handleResponse = (response) => {
    if(response.status !== 200){
        return Promise.reject(response.statusText)
    }
    return response.data;
}