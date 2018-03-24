import React from 'react';
import {InputGroup,Checkbox} from 'Forms';
import {ApplyButton} from 'Buttons';

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