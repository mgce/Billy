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
            className = "form-input"
            type={props.type} 
            name={props.name}/>
        </div>
    )
}

export default FormInputElement;