import React from 'react';

const SignType = props => {
    return(
        <div className="login-type-container">
            {props.loginVisible ? (
                <div>
                    <span className="active">Login</span>
                    <span> or </span>
                    <span 
                    className="inactive" 
                    onClick = {props.changeView}>Register</span>
                </div>
            ) : (
                <div>
                    <span 
                    className="inactive" 
                    onClick = {props.changeView}>Login</span>
                    <span> or </span>
                    <span className="active">Register</span>
                </div>
            )}
        </div>
    )
}

export default SignType;