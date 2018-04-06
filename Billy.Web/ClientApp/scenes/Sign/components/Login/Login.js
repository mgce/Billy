import React from 'react';
import Link, {LinkedComponent} from 'valuelink'
import PropTypes from 'prop-types'
import LoginForm from '../Forms/LoginForm/LoginForm'
import {Helpers, BillyHttpClient} from 'Others'
import axios from 'axios'

class LoginContainer extends LinkedComponent {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: '',
            rememberMe: false,
            touched:{
                submit: false
            }
        }
    }
    handleBlur = field => {
        this.setState({
            touched : {...this.state.touched, [field]: true}
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();

        if(Helpers.isEmptyOrUndefined(this.state.login)
            || Helpers.isEmptyOrUndefined(this.state.password)){
            this.setState({touched: {...this.state.touched, 'submit': true}})
            return;
        }

        var test = BillyHttpClient.login(
            this.state.login, 
            this.state.password).then(res => {
                if(res.data){
                    this.props.signInUser();
                }
            })
            
    }
    render(){
        let linked = this.linkAll();

        if(this.state.touched.submit){
            linked.login = linked.login.check(x => x, 'Login is required');
            linked.password = linked.password.check(x => x, 'Password is required');
        }

        const isFormValid = !Helpers.isEmptyOrUndefined(linked.login.error)
            && !Helpers.isEmptyOrUndefined(linked.password.error);

        return(
            <LoginForm
            onSubmit = {this.onSubmit.bind(this)}
            links = {linked}
            isFormValid = {isFormValid}
            onBlur = {this.handleBlur.bind(this)}/>
        )
    }
}


const Login = () => {
    const isButtonEnabled = Helpers.isEmptyOrUndefined(this.state.login)
    || Helpers.isEmptyOrUndefined(this.state.password)
    return(
        <LoginForm
            onSubmit = {this.onSubmit.bind(this)}
            links = {linked}
            isFormValid = {isFormValid}
            onBlur = {this.handleBlur.bind(this)}/>
    )
}



export default connect(
    mapStateToProps,
    mapDispatchToProps)(LoginForm)
