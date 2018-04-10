import React from 'react';
import {ApplyButton} from 'Buttons';
import {Input, ErrorPlaceholder, FormLabel,Checkbox} from 'Forms'
import {Field, reduxForm} from 'redux-form'
import {isRequired} from 'Others'
import {actions} from 'Ducks/Login'

const LoginForm = ({
    handleSubmit,
    login
    }) => {
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <FormLabel name="Login"/>
            <Field 
                name="login"
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
            <Field 
                name="rememberMe"
                text="Remember me"
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
    dispatch(actions.login(values.login, values.password))
}

export default reduxForm({
    form: 'loginForm',
    onSubmit: onSubmit,
    touchOnBlur: true,
})(LoginForm)