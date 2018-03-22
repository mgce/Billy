import React from 'react';
import SignInRight from '../Sign/components/signInRight'
import SignInLeft from '../Sign/components/SignInLeft'
import Link, {LinkedComponent} from 'valuelink'

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

export default SignContainer;