import React from 'react';
import PropTypes from 'prop-types';

const ApplyButton = ({
    disabled, 
    type, 
    name, 
    onClick
    }) => {
    return(
        <button 
            disabled={disabled} 
            type={type} 
            onClick = {onClick}
            className="apply-btn span-between-btns">
        <span>
            {name}
        </span>
        </button>
    )
}

ApplyButton.propTypes = {
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired
}
ApplyButton.defaultProps = {
    type: "submit",
    disabled: false
}

export default ApplyButton;