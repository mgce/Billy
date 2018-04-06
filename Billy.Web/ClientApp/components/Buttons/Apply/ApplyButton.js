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
            onClick = {e => onClick(e.target.value)}
            disabled={disabled} 
            type={type} 
            className="apply-btn span-between-btns">
        <span>
            {name}
        </span>
        </button>
    )
}

ApplyButton.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired
}
ApplyButton.defaultProps = {
    type: "submit",
    disabled: false
}

export default ApplyButton;