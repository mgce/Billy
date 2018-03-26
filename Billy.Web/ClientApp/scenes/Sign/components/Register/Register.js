import React from 'react';
import Link, {LinkedComponent} from 'valuelink'
import Helpers from 'Helpers/Helpers'
import axios from 'axios'
import RegisterForm from '../Forms/RegisterForm/RegisterForm'

var isRegisterFormValid = (email, userName, password, confirmPassword) =>{
    if(Helpers.isEmptyOrUndefined(email) ||
        Helpers.isEmptyOrUndefined(userName) ||
        Helpers.isEmptyOrUndefined(password) ||
        Helpers.isEmptyOrUndefined(confirmPassword)){
            return false;
        }
    if(password !== confirmPassword){
        return false;
    }
    if(!email.match(Helpers.emailRegex)){
        return false;
    }
    return true;
}

class RegisterContainer extends LinkedComponent{
    constructor(props){
        super(props);
        this.state = {
            userName :'',
            password : '',
            confirmPassword :'',
            email :'',
            privacyPolicy:false,
            touched:{
                submit: false,
            }
        }
    }
    handleBlur = field => {
        this.setState({
            touched : {...this.state.touched, [field]: true}
        })
    }
    validateForm = (linked) => {
        if(this.state.touched.submit){
            linked.email.check(x=>x, 'Email is required')
            .check(x=>x.match(Helpers.emailRegex), 'Email is invalid');
            linked.userName.check(x=>x, 'Username is required');
            linked.password.check(x=>x, 'Password is required')
            .check(x=>x.length > 8, 'Password should be longer than 8 characters');
            linked.confirmPassword.check(x=> x, 'Confirm password is required')
                .check(x=> x === this.state.password, 'Confirm password is not equal to password');
        }
        return linked;
    }
    onSubmit = (e) =>{
        e.preventDefault();

        if(!isRegisterFormValid(
            this.state.email,
            this.state.userName,
            this.state.password,
            this.state.confirmPassword)){
            this.setState({touched: {...this.state.touched, 'submit': true}})
            return;
        }

        axios.post('/account/register',{
            UserName : this.state.userName,
            Password: this.state.password,
            ConfirmPassword: this.state.confirmPassword,
            Email: this.state.email,
        })
        .then(res => console.log(res));
    }
    render(){
        let linked = this.linkAll();
        linked = this.validateForm(linked);

        return(
            <RegisterForm
            onSubmit = {this.onSubmit.bind(this)}
            links = {linked}/>
        )
    }
}

export default RegisterContainer;
