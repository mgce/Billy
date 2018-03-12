import React from 'react';

import Form from '../../../../components/Forms/index'

const Login = props => {
    return(
        <div className="login-container">
            <div className="login-box">
            <Form 
            items={[
                {name:"Login", type:"text"},
                {name:"Password", type:"password"}
            ]}/>
            </div>
        </div>
    )
}

class LoginContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <Login />
        )
    }
}

const SignInLeft = props => {
    return(
        <div className="logo">
            <b>Logo</b>
        </div>
    )
}

const SignInRight = props => {
    return(
            <LoginContainer test="lol"/>
    )
}

class SignContainer extends React.Component{
    constructor(props){
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

