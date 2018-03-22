import React from 'react';
import InputGroup from '../../../../components/Forms/InputGroup'
import ApplyButton from '../../../../components/Buttons/ApplyButton'
import Checkbox from '../../../../components/Forms/Checkbox'

const RegisterForm = props => {
    return(
        <form onSubmit={props.onSubmit}>
                <InputGroup 
                    labelName="Email"
                    name="email"
                    link={props.links.email}
                    onBlur={props.onBlur}/>
                <InputGroup 
                    labelName="Username"
                    name="username"
                    link={props.links.userName}
                    onBlur={props.onBlur}/>
                <InputGroup 
                    labelName="Password"
                    name="password"
                    type="password"
                    link={props.links.password}
                    onBlur={props.onBlur}/>
                <InputGroup 
                    labelName="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    link={props.links.confirmPassword}
                    onBlur={props.onBlur}/>
                <Checkbox 
                    name="privacyPolicyAccepted"
                    text="Accept privacy policy"
                    link={props.links.privacyPolicy}/>
                <div className="form-btn-line">
                    <ApplyButton name="Register" type="submit"/>
                </div>
        </form>
    )
}

export default RegisterForm;