import React from 'react';

import FormInputElement from '../../../../components/Forms/formInputElement'
import ApplyButton from '../../../../components/Buttons/ApplyButton'
import InvisibleButton from '../../../../components/Buttons/InvisibleButton'
import Checkbox from '../../../../components/Forms/Checkbox'

const LoginForm = props => {
    return(
        <form>
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

export default LoginForm;