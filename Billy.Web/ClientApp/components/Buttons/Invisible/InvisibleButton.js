import React from 'react';

const InvisibleButton = props =>{
    return(
        <button type={props.type} className="invisible-btn">
        <span>
            {props.name}
        </span>
        </button>
    )
}

export default InvisibleButton;