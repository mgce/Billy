import React from 'react';
import Link, {LinkedComponent} from 'valuelink'
import FormInputElement from '../../../../components/Forms/formInputElement'
import ApplyButton from '../../../../components/Buttons/ApplyButton'
import InvisibleButton from '../../../../components/Buttons/InvisibleButton'
import Checkbox from '../../../../components/Forms/Checkbox'
import axios from 'axios'

class RegisterContainer extends LinkedComponent{
    constructor(props){
        super(props);
        this.state = {
            userName :'',
            password : '',
            confirmPassword :'',
            email :'',
            privacyPolicyAccepted :false,
            touched:{
                userName: false,
                password: false,
                confirmPassword: false,
                email: false,
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

        axios.post('/account/register',{
            UserName : this.state.userName,
            Password: this.state.password,
            ConfirmPassword: this.state.confirmPassword,
            Email: this.state.email,
        })
        .then(res => console.log(res));
    }
    render(){
        return(
            <Register 
            onSubmit = {this.onSubmit.bind(this)}
            privacyPolicyLink = {this.linkAt('privacyPolicyAccepted')}
            items={[
                {name:"email", label:"Email", type:"text", link:this.linkAt('email')},
                {name:"username", label:"Username", type:"text", link:this.linkAt('userName')},
                {name:"password", label:"Password", type:"password", link:this.linkAt('password')},
                {name:"confirmPassword", label:"Confirm Password", type:"password", link:this.linkAt('confirmPassword')},
            ]}/>
        )
    }
}

const Register = props => {
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
                name="privacyPolicyAccepted"
                text="Accept privacy policy"
                link={props.privacyPolicyLink}/>
                <div className="form-btn-line">
                    <ApplyButton name="Register" type="submit"/>
                </div>
        </form>
    )
}

export default RegisterContainer;