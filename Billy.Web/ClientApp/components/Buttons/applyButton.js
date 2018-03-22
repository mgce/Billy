import React from 'react';
import PropTypes from 'prop-types';

const ApplyButton = props =>{
    const {disabled, type, name, onClick} = props;
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
    isDisabled: PropTypes.bool,
    name: PropTypes.string.isRequired
}
ApplyButton.defaultProps = {
    type: "submit"
}

export default ApplyButton;