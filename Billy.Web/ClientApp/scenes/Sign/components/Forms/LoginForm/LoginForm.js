import React from 'react';
import {InputGroup,Checkbox} from 'Forms';
import {ApplyButton} from 'Buttons';
import {Input, ErrorPlaceholder, FormLabel} from 'Forms'
import {Field} from 'redux-form'
import {reduxForm} from 'redux-form';
/* const LoginForm = ({
    handleSubmit,
}) => {
    return(
        <form onSubmit={onSubmit}>
            <InputGroup 
                labelName="Login"
                name="login"
                onBlur={props.onBlur}/>
            <InputGroup 
                labelName="Password"
                name="password"
                type="password"
                onBlur={props.onBlur}/>
            <Checkbox 
                name="isRemembered"
                text="Remember me"/>
            <div className="form-btn-line">
                <ApplyButton 
                name="Log In" 
                disabled={props.isFormValid}/>
            </div>
        </form>
    )
} */

//export default LoginForm;

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
        <form onSubmit={handleSubmit(login)}>
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

const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        ...actions
    }, dispatch)
})

export default reduxForm({
    form: 'loginForm',
    touchOnChange: true
})(LoginForm)