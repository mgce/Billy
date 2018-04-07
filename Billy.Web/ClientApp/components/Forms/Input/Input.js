import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    input, 
    type,
    meta
}) =>{
    const error = meta && meta.error && meta.touched ? 
        (meta.error) : 
        ('');
    const inputClass = error ? 
    ("error-form-input") : 
    ("form-input");
    return(
        <div>
            <input
                {...input}
                className = {inputClass}
                type={type}/>
            <div className="error-placeholder">
                {error}
            </div>
        </div>
    )
}

Input.propTypes = {
    name: PropTypes.string,
}

Input.defaultProps = {
    type: "text"
}

export default Input;