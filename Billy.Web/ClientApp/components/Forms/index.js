import React from 'react';

const Form = props => {
    return(
        <form>
            {props.items.map(item => 
                <FormInputElement 
                    type={item.type} 
                    name={item.name}/>
                )}
        </form>
    )
}

const FormInputElement = props => {
    return(
        <div className="form-group">
            <label className="form-label">
                {props.name}
            </label>
            <input 
            className = "form-input"
            type={props.type} 
            name={props.name}/>
        </div>
    )
}

export default Form;