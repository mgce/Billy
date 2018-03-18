import React from 'react';
import Link, {LinkedComponent} from 'valuelink'

const FormInputElement = props => {
    return(
        <div className="form-group">
            <label className="form-label">
                {props.label}
            </label>
            <input
            {...props.link.props}
            onBlur = {e => props.onBlur(props.name)}
            className = {props.link.error ? "error-form-input" : "form-input"}
            type={props.type} 
            name={props.name}/>
            <div className="error-placeholder">
                {props.link.error || ''}
            </div>
        </div>
    )
}

export default FormInputElement;