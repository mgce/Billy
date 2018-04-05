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
            <SignIn 
            changeView = {this.changeView.bind(this)} 
            loginVisible={this.state.loginVisible}
            signInUser = {this.props.signInUser}/>
        )
    }
}

export default SignContainer;