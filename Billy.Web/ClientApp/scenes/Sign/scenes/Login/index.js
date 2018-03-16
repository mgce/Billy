import React from 'react';
import Link, {LinkedComponent} from 'valuelink'
import LoginContainer from '../../components/Forms/loginForm'
import RegisterContainer from '../../components/Forms/registerForm'
import PropTypes from 'prop-types'


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
            <div className="sign-type-box">
            <SignType 
                    changeView = {props.changeView} 
                    loginVisible ={props.loginVisible }/>
            </div>
                <div className="login-box">
                    
                    {props.loginVisible ? (
                        <LoginContainer/>
                    ) : (
                        <RegisterContainer />
                    )}
                </div>
        </div>
    )
}

class SignContainer extends LinkedComponent{
    constructor(props){
        super(props);
        this.state = {
            loginVisible: true
        }
    }
    changeView = (e) =>{
        this.setState((prevState) => {
            return {loginVisible: !this.state.loginVisible}
        })
    }
    render(){
        return(
            <SignIn changeView = {this.changeView.bind(this)} loginVisible={this.state.loginVisible}/>
        )
    }
}

const SignIn = props => {
    return(
        <div className="sign-container">
            <div className="signIn-left-container">
                <SignInLeft/>
            </div>
            <div className="signIn-right-container">
                <SignInRight changeView={props.changeView} loginVisible={props.loginVisible}/>
            </div>
        </div>
    )
}

export default SignContainer;

