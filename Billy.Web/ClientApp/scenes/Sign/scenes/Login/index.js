import React from 'react';
import Link, {LinkedComponent} from 'valuelink'
import LoginForm from '../../components/Forms/loginForm'
import PropTypes from 'prop-types'

const SignType = props => {
    return(
        <div className="login-type-container">
            <span className="active">Login</span>
             <span> or </span>
             <span>Register</span>
        </div>
    )
}

class LoginContainer extends LinkedComponent {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: '',
            rememberMe: false
        }
    }
    render(){
        return(
            <LoginForm 
            checkboxLink = {this.linkAt('rememberMe')}
            items={[
                {name:"Login", type:"text", link:this.linkAt('login')},
                {name:"Password", type:"password", link:this.linkAt('password')}
            ]}/>
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
        <div className="login-container">
            <div className="login-box">
                <SignType/>
                <LoginContainer/>
            </div>
        </div>
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

