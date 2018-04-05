import React from 'react';

const SignType = ({
    loginVisible,
    changeSignType
}) => {
    var header = loginVisible ? (
        <div>
            <span className="active">Login</span>
            <span> or </span>
            <span 
            className="inactive" 
            onClick = {changeSignType}>Register</span>
        </div>
    ) : (
        <div>
            <span 
            className="inactive" 
            onClick = {changeSignType}>Login</span>
            <span> or </span>
            <span className="active">Register</span>
        </div>
    )
    return(
        <div className="sign-type-box">
            <div className="login-type-container">
                {header}
            </div>
        </div>
        
    )
}

export default SignType;