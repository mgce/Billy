import React from 'react';
import Link, {LinkedComponent} from 'valuelink'
import InputGroup from '../../../../components/Forms/InputGroup'
import ApplyButton from '../../../../components/Buttons/ApplyButton'
import Checkbox from '../../../../components/Forms/Checkbox'
import Helpers from '../../../../components/helpers'
import axios from 'axios'
import { isNullOrUndefined } from 'util';

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

        axios.post('/account',{
            Username : this.state.login,
            Password : this.state.password
        })
        .then(res => console.log(res));
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

const LoginForm = props => {
    return(
        <form onSubmit={props.onSubmit}>
            <InputGroup 
                labelName="Login"
                name="login"
                link={props.links.login}
                onBlur={props.onBlur}/>
            <InputGroup 
                labelName="Password"
                name="password"
                link={props.links.password}
                type="password"
                onBlur={props.onBlur}/>
            <Checkbox 
                name="isRemembered"
                text="Remember me"
                link={props.links.rememberMe}/>
            <div className="form-btn-line">
                <ApplyButton 
                name="Log In" 
                disabled={props.isFormValid}/>
            </div>
        </form>
    )
}

export default LoginContainer;