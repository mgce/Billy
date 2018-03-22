import React from 'react';
import InputGroup from '../../../../components/Forms/InputGroup'
import ApplyButton from '../../../../components/Buttons/ApplyButton'
import Checkbox from '../../../../components/Forms/Checkbox'

const LoginForm = props => {
    return(
        <form onSubmit={props.onSubmit}>
            <InputGroup 
                labelName="Login"
                name="login"
                link={props.links.login}
                onBlur={props.onBlur}/>
            <InputGroup 
                labelName="Password"
                name="password"
                link={props.links.password}
                type="password"
                onBlur={props.onBlur}/>
            <Checkbox 
                name="isRemembered"
                text="Remember me"
                link={props.links.rememberMe}/>
            <div className="form-btn-line">
                <ApplyButton 
                name="Log In" 
                disabled={props.isFormValid}/>
            </div>
        </form>
    )
}

export default LoginForm;