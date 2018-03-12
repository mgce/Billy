import React from 'react';

import SignInLeft from './signInLeft';
import SignInRight from './signInRight';

const SignIn = props => {
    return(
        <div className="sign-container">
            <div className="signIn-left-container">
                <SignInLeft/>
            </div>
            <div className="signIn-right-container">
                <SignInRight/>
            </div>
        </div>
    )
}

export default SignIn;