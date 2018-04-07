import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
    input,
    text,
    type
}) => {
    return(
        <div>
        <label htmlFor={input.name} className="checkbox-label">
        <input 
                {...input}
                className="regular-checkbox"
                type={type} 
                checked={input.value}/>
                {text}
        </label>
        </div>
    )
}

Checkbox.propTypes = {
    text: PropTypes.string,
    name: PropTypes.string,
}


export default Checkbox;