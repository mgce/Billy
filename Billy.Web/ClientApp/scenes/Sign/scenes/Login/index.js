import React from 'react';

const SignInLeft = props => {
    return(
        <div>
            <b>test</b>
        </div>
    )
}

const SignInRight = props => {
    return(
        <div>
            <b>test2</b>
        </div>
    )
}

class SignContainer extends React.Component{
    constructor(){
        super(props);
        this.state = {}
    }
    render(){
        <Sign />
    }
}

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

