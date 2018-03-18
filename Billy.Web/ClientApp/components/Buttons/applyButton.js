import React from 'react';

const ApplyButton = props =>{
    return(
        <button 
            onClick = {e => props.onClick('submit')}
            disabled={props.isDisabled} 
            type={props.type} 
            className="apply-btn span-between-btns">
        <span>
            {props.name}
        </span>
        </button>
    )
}

export default ApplyButton;