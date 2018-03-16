import React from 'react';
import Link, {LinkedComponent} from 'valuelink'
import FormInputElement from '../../../../components/Forms/formInputElement'
import ApplyButton from '../../../../components/Buttons/ApplyButton'
import InvisibleButton from '../../../../components/Buttons/InvisibleButton'
import Checkbox from '../../../../components/Forms/Checkbox'
import axios from 'axios'

class LoginContainer extends LinkedComponent {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: '',
            rememberMe: false
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();

        axios.post('/account',{
            Username : this.state.login,
            Password : this.state.password
        })
        .then(res => console.log(res));
    }
    render(){
        return(
            <LoginForm 
            onSubmit = {this.onSubmit.bind(this)}
            checkboxLink = {this.linkAt('rememberMe')}
            items={[
                {name:"Login", type:"text", link:this.linkAt('login')},
                {name:"Password", type:"password", link:this.linkAt('password')}
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
                    link={item.link}/>
                )}
                <Checkbox 
                name="isRemembered"
                text="Remember me"
                link={props.checkboxLink}/>
                <div className="form-btn-line">
                    <ApplyButton name="Log In" type="submit"/>
                    <InvisibleButton name="I lost my account" type="submit"/>
                </div>
        </form>
    )
}

export default LoginContainer;