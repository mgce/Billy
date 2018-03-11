import React from 'react';

import signInLeft from './signInLeft';

const SignIn = props => {
    return(
        <div className="sign-container">
            <div className="signIn-left-container">
                <signInLeft/>
            </div>
            <div className="signIn-right-container"></div>
        </div>
    )
}

export default SignIn;