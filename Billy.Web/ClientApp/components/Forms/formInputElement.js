import React from 'react';

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

export default FormInputElement;