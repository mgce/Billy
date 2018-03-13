import React from 'react';

import LoginForm from '../../components/Forms/loginForm'

const SignType = props => {
    return(
        <div className="login-type-container">
            <span className="active">Login</span>
             <span> or </span>
             <span>Register</span>
        </div>
    )
}

const Login = props => {
    return(
        <div className="login-container">
            <div className="login-box">
            <SignType/>
            <LoginForm 
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
        this.state = {
            login: '',
            password: ''
        }
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
            My<b>Billy</b>
        </div>
    )
}

const SignInRight = props => {
    return(
        <LoginContainer/>
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

