import React from 'react';
import {SignInRight, SignInLeft} from 'Sign/components/index';
import Link, {LinkedComponent} from 'valuelink';

const SignIn = props => {
    return(
        <div className="sign-container">
        <SignInLeft/>
         <div className="signIn-right-container">
            <SignInRight/>
         </div>
        </div>
        
    )
}

export default SignIn;