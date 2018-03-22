import React from 'react';
import PropTypes from 'prop-types';

const Input = props =>{
    const {name, link, type, onBlur} = props;
    return(
        <input
            {...link.props}
            className = {link.validationError ? "error-form-input" : "form-input"}
            name={name}
            type={type}
            onBlur = {e => onBlur(name)}/>
    )
}

Input.propTypes = {
    link: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func
}

Input.defaultProps = {
    type: "text"
}

export default Input;