import React from 'react';
import Link, {LinkedComponent} from 'valuelink'

const FormInputElement = props => {
    return(
        <div className="form-group">
            <label className="form-label">
                {props.name}
            </label>
            <input
            {...props.link.props}
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