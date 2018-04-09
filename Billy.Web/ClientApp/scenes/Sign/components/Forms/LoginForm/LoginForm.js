import React from 'react';
import {InputGroup,Checkbox} from 'Forms';
import {ApplyButton} from 'Buttons';
import {Input, ErrorPlaceholder, FormLabel} from 'Forms'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {actions} from 'Ducks/Login'

function submit(value){
    return console.log(value);
}

function isRequired(value){
    const errors = {};
    if(!value || value.trim() === ''){
        return 'This field is required'
    }
}

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

const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        ...actions
    }, dispatch)
})

connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default reduxForm({
    form: 'loginForm',
    onSubmit: onSubmit,
    touchOnChange: true,
})(LoginForm)