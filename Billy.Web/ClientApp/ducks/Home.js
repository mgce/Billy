export const types = {
    SHOW_ADD_BILL_MODAL: 'MODALS_SHOW_ADD_BILL_MODAL',
    HIDE_ADD_BILL_MODAL: 'MODALS_HIDE_ADD_BILL_MODAL'
};

const initialState = {
    addBillModalOpen: false
};

export default (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_ADD_BILL_MODAL:
            return {
                ...state,
                addBillModalOpen: true
            };
        case types.HIDE_ADD_BILL_MODAL:
        return {
            ...state,
            addBillModalOpen: false
        };
        default:
            return state;
    }
}

export const actions = {
    showAddBillModal,
    hideAddBillModal
}

function showAddBillModal(){
    return dispatch => {
        dispatch(show());
    }
    function show(){ return { type: types.SHOW_ADD_BILL_MODAL}}
}

function hideAddBillModal(){
    return dispatch => {
        dispatch(show());
    }
    function show(){ return { type: types.HIDE_ADD_BILL_MODAL}}
}