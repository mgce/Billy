import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input, ErrorPlaceholder, FormLabel,Checkbox} from 'Forms';
import {MultiInputDropdown, SelectDropdown} from 'Components/Dropdown';
import {isRequired} from 'Others';
import {ModalButtonsFooter} from 'Components/Modal';
import {Datepicker} from 'Components/Datepicker';
import {actions} from 'Ducks/Bills';
import {RadioButton} from 'material-ui/RadioButton';
import {
    RadioButtonGroup,
    DatePicker
  } from 'redux-form-material-ui';
import moment from 'moment';


const AddBillForm = ({
    handleSubmit,
    categories,
    suppliers
}) => {
    var dateTimeNow = new Date();
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
                name="supplier"
                type="select"
                placeholder="Select supplier..."
                component={MultiInputDropdown}
                categories = {suppliers}
                />
            </div>
            <div className="form-group">
            <FormLabel name="Amount"/>
            <Field 
                name="amountValue"
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
                <FormLabel name="End of payment date"/>
                <Field name="paymentPeriod" component={RadioButtonGroup}>
                <RadioButton value="true" label="Periodically" />
                <RadioButton value="false" label="Once" />
            </Field>
            </div>
            <div className="form-group">
            <FormLabel name="End of payment date"/>
            <Field 
                name="paymentDate"
                autoOk={true}
                //formatDate={value => moment(value).format('DD-MM-YYYY')}
                component={Datepicker}/>
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
        supplier: values.supplier.value,
        paymentPeriod: values.paymentPeriod == 'true' ? (true) : (false),
        amountValue: values.amountValue,
        paymentDate: values.paymentDate
    }
    dispatch(actions.add(bill))
}

export default reduxForm({
    form: 'billListModal',
    onSubmit: onSubmit,
    touchOnBlur: true,
})(AddBillForm)