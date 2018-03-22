import React from 'react';
import Link, {LinkedComponent} from 'valuelink'
import InputGroup from '../../../../components/Forms/InputGroup'
import ApplyButton from '../../../../components/Buttons/ApplyButton'
import Checkbox from '../../../../components/Forms/Checkbox'
import Helpers from '../../../../components/helpers'
import axios from 'axios'

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

const RegisterForm = props => {
    return(
        <form onSubmit={props.onSubmit}>
                <InputGroup 
                    labelName="Email"
                    name="email"
                    link={props.links.email}
                    onBlur={props.onBlur}/>
                <InputGroup 
                    labelName="Username"
                    name="username"
                    link={props.links.userName}
                    onBlur={props.onBlur}/>
                <InputGroup 
                    labelName="Password"
                    name="password"
                    type="password"
                    link={props.links.password}
                    onBlur={props.onBlur}/>
                <InputGroup 
                    labelName="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    link={props.links.confirmPassword}
                    onBlur={props.onBlur}/>
                <Checkbox 
                    name="privacyPolicyAccepted"
                    text="Accept privacy policy"
                    link={props.links.privacyPolicy}/>
                <div className="form-btn-line">
                    <ApplyButton name="Register" type="submit"/>
                </div>
        </form>
    )
}

export default RegisterContainer;