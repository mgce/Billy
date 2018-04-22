import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input, ErrorPlaceholder, FormLabel,Checkbox} from 'Forms';
import {MultiInputDropdown, SelectDropdown} from 'Components/Dropdown';
import {isRequired} from 'Others';
import {ModalButtonsFooter} from 'Components/Modal';
import {actions} from 'Ducks/Bills';

const AddBillForm = ({
    handleSubmit,
    categories,
    suppliers
}) => {
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <FormLabel name="Bill name"/>
            <Field 
                name="name"
                type="text"
                component={Input}
                validate={isRequired}/>
            </div>
            <div className="form-group">
            <FormLabel name="Supplier"/>
            <Field 
            // In dropdown which are related with react-select
            //We can't use validate method
            //it should be in component
                name="category"
                type="select"
                placeholder="Select category..."
                component={MultiInputDropdown}
                categories = {categories}
                />
            </div>
            <div className="form-group">
            <FormLabel name="Amount"/>
            <Field 
                name="amount"
                type="number"
                component={Input}
                validate={isRequired}/>
            </div>
            
            <div className="form-group">
            <FormLabel name="Category"/>
            <Field 
            // In dropdown which are related with react-select
            //We can't use validate method
            //it should be in component
                name="category"
                type="select"
                placeholder="Select category..."
                component={MultiInputDropdown}
                categories = {categories}
                >
            </Field>
            </div>
            <div className="form-group">
            <FormLabel name="Payment period"/>
            <Field 
                name="paymentPeriod"
                type="select"
                placeholder="Select payment period..."
                options={[
                    {value: true, label:"Periodical"},
                    {value: false, label:"Once"},
                ]}
                component={SelectDropdown}
                >
            </Field>
            </div>
            <ModalButtonsFooter
            acceptText={"Add new bill"}/>
        </form>
    )
}

const onSubmit = (values, dispatch) => {
    const bill = {
        name: values.name,
        category: values.category.value,
        supplier: values.supplier,
        paymentPeriod: values.paymentPeriod.value
    }
    dispatch(actions.add(bill))
}

export default reduxForm({
    form: 'billListModal',
    onSubmit: onSubmit,
    touchOnBlur: true,
})(AddBillForm)