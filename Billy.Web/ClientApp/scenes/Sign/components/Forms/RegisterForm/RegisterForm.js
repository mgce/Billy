import React from 'react';
import {ApplyButton} from 'Buttons';
import {Input, ErrorPlaceholder, FormLabel, Checkbox} from 'Forms'
import {Field, reduxForm} from 'redux-form'
import {actions} from 'Ducks/Register'
import {isRequired, isPasswordsEqual} from 'Others'


const RegisterForm = ({
    handleSubmit
}) => {
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <FormLabel name="Email"/>
                <Field 
                    name="email"
                    type="text"
                    component={Input}
                    validate={isRequired}/>
            </div>
            <div className="form-group">
                <FormLabel name="Username"/>
                <Field 
                    name="username"
                    type="text"
                    component={Input}
                    validate={isRequired}/>
            </div>
            <div className="form-group">
                <FormLabel name="Password"/>
                <Field 
                    name="password"
                    type="password"
                    component={Input}
                    validate={isRequired}/>
            </div>
            <div className="form-group">
                <FormLabel name="Confirm Password"/>
                <Field 
                    name="confirmPassword"
                    type="password"
                    component={Input}
                    validate={[isRequired, isPasswordsEqual]}/>
            </div>
            <div className="form-group">
            <Field 
                name="privacyPolicyAccepted"
                text="Accept privacy policy"
                type="checkbox"
                component={Checkbox}/>
            </div>
            <div className="form-btn-line">
                <ApplyButton 
                name="Log In"/>
            </div>
        </form>
    )
}

const onSubmit = (values, dispatch) => {
    const user = {
        email: values.email,
        username: values.username,
        password: values.password,
    }
    dispatch(actions.register(user))
}

export default reduxForm({
    form: 'registerForm',
    onSubmit: onSubmit,
    touchOnBlur: true
})(RegisterForm);