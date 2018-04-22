import React from 'react';
import {actions as billActions}  from 'Ducks/AddBill'
import {actions as suppliersActions}  from 'Ducks/Suppliers'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Modal} from 'Components/Modal';
import AddBillForm from './AddBillForm.jsx';

class AddBill extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount = () =>{
        this.props.getAllBills();
        this.props.getAllSuppliers();
    }
    render(){
        const {categories} = this.props.addBillProps;
        const {suppliers} = this.props.supplierProps;
        return(
            <Modal 
                headerText={"Add new bill"}
                hideModal={this.props.hideModal}>
                <AddBillForm 
                suppliers={suppliers}
                categories={categories}/>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        addBillProps: state.addBill,
        supplierProps: state.suppliers
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        ...billActions, ...suppliersActions
    }, dispatch)
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(AddBill)

