import React from 'react';
import Link, {LinkedComponent} from 'valuelink'
import FormInputElement from '../../../../components/Forms/formInputElement'
import ApplyButton from '../../../../components/Buttons/ApplyButton'
import InvisibleButton from '../../../../components/Buttons/InvisibleButton'
import Checkbox from '../../../../components/Forms/Checkbox'
import axios from 'axios'
import { isNullOrUndefined } from 'util';

var helpers = {
    isEmpty: function(value){
        if(value == ""){
            return true;
        }
            return false;
    },
    isUndefinedOrNull: function(value){
        if(value == null || value == undefined){
            return true;
        }
        return false;
    },
    isEmptyOrUndefined: function(value){
        if(this.isEmpty(value) || this.isUndefinedOrNull(value)){
            return true;
        }
        return false;
    }
}

class LoginContainer extends LinkedComponent {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: '',
            errorMessage: '',
            rememberMe: false,
            touched:{
                login: false,
                password: false,
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
        
        if(isEmptyOrUndefined(this.state.login) || isEmptyOrUndefined(this.state.password))
            return;

        axios.post('/account',{
            Username : this.state.login,
            Password : this.state.password
        })
        .then(res => console.log(res));
    }
    render(){
        const hasNumber = /\d/;
        let loginLink = Link.state(this, 'login');
        {
            this.state.touched.login ? 
            loginLink = loginLink.check(x => x, 'Login is required')
            .check(x => x.indexOf(' ') < 0, "Login shouldn't contain spaces")
            : loginLink
        }
        let passwordLink = Link.state(this, 'password');
        {
            this.state.touched.password ? 
            passwordLink = passwordLink.check(x => x, 'Password is required')
            : passwordLink
        }

        return(
            <LoginForm 
            onSubmit = {this.onSubmit.bind(this)}
            checkboxLink = {this.linkAt('rememberMe')}
            isFormValid = {!helpers.isEmptyOrUndefined(loginLink.error) && !helpers.isEmptyOrUndefined(passwordLink.error)}
            handleBlur = {this.handleBlur.bind(this)}
            items={[
                {name:"login", label:"Login", type:"text", link:loginLink},
                {name:"password", label:"Password", type:"password", link:passwordLink}
            ]}/>
        )
    }
}

const LoginForm = props => {
    return(
        <form onSubmit={props.onSubmit}>
            {props.items.map((item, key) => 
                <FormInputElement 
                    key = {key}
                    type={item.type} 
                    name={item.name}
                    label={item.label}
                    link={item.link}
                    onBlur={props.handleBlur}/>
                )}
                <Checkbox 
                name="isRemembered"
                text="Remember me"
                link={props.checkboxLink}/>
                <div className="form-btn-line">
                    <ApplyButton 
                    name="Log In" 
                    type="submit" 
                    isDisabled={props.isFormValid}
                    onClick={props.handleBlur}/>
                </div>
        </form>
    )
}

export default LoginContainer;