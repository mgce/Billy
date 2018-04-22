import {categoryService} from 'Services';

export const types = {
    ADD_CATEGORY_REQUEST: 'ADD_BILL_ADD_CATEGORY_REQUEST',
    ADD_CATEGORY_SUCCESS: 'ADD_BILL_ADD_CATEGORY_SUCCESS',
    ADD_CATEGORY_FAILURE: 'ADD_BILL_ADD_CATEGORY_FAILURE',
    LOAD_CATEGORIES_REQUEST: 'ADD_BILL_LOAD_CATEGORIES_REQUEST',
    LOAD_CATEGORIES_SUCCESS: 'ADD_BILL_LOAD_CATEGORIES_SUCCESS',
    LOAD_CATEGORIES_FAILURE: 'ADD_BILL_LOAD_CATEGORIES_FAILURE',
};

const initialState = {
    categories: [],
    isCategoryLoading: false,
};

export default (state = initialState, action) => {
    switch(action.type){
        case types.ADD_CATEGORY_REQUEST:
            return {
                ...state,
                isCategoryLoading: true
            };
        case types.ADD_CATEGORY_SUCCESS:
        return {
            ...state,
            categories: [...state,categories, action.category],
            isCategoryLoading: false
        };
        case types.ADD_CATEGORY_FAILURE:
        return {
            ...state,
            isCategoryLoading: false
        };
        case types.LOAD_CATEGORIES_REQUEST:
        return {
            ...state,
            isCategoryLoading: true
        };
        case types.LOAD_CATEGORIES_SUCCESS:
        return {
            ...state,
            categories: action.categories,
            isCategoryLoading: false
        };
        case types.LOAD_CATEGORIES_FAILURE:
        return {
            ...state,
            isCategoryLoading: false
        };
        default:
            return state;
    }
}

export const actions = {
    addBill,
    getAllBills
}

//DODAJAC KATEGORIE MUSIMY OD RAZU DODAC JE NA SERWER ABY UZYSKAC ID
//KTORE NASTEPNIE PRZYPISUJEMY I ZWRACAMY
//DLATEGO TEZ TRZEBA TO PODZIELIC NA TRZY ETAPY JAK ZAWSZE

function addBill(category){
    return dispatch => {
        dispatch(request(category));
        categoryService.add(category).then(categories => {
            dispatch(success(categories));
        }, error => {
            dispatch(failure(error))
        })
    }

    function request(category){ return { type: types.ADD_CATEGORY_REQUEST, category}}
    function success(categories) { return { type: types.ADD_CATEGORY_SUCCESS, categories } }
    function failure(error) { return { type: types.ADD_CATEGORY_FAILURE, error } }
}

function getAllBills(){
    return dispatch => {
        dispatch(request());
        categoryService.getAll().then(categories => {
            dispatch(success(categories.data));
        }, error => {
            dispatch(failure(error))
        })
    }

    function request(){ return { type: types.LOAD_CATEGORIES_REQUEST}}
    function success(categories) { return { type: types.LOAD_CATEGORIES_SUCCESS, categories } }
    function failure(error) { return { type: types.LOAD_CATEGORIES_FAILURE, error } }
}
