import React from 'react';
import SignType from '../SignType/SignType'
import LoginContainer from '../Login/Login'
import RegisterContainer from '../Register/Register'

const SignInRight = props => {
    return(
        <div className="sign-container2">
            <div className="sign-type-box">
                <SignType 
                changeView = {props.changeView} 
                loginVisible ={props.loginVisible }/>
            </div>
            <div className="login-container">
                <div className="login-box">
                    {props.loginVisible ? (
                        <LoginContainer/>
                    ) : (
                        <RegisterContainer />
                    )}
                </div>
            </div>
        </div>
           
    )
}

export default SignInRight;