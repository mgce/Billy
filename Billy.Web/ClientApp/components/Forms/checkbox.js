import React from 'react';

const Checkbox = props => {
    return(
        <div>
        <label htmlFor={props.name} className="checkbox-label">
        <input 
                {...props.link.props}
                className="regular-checkbox"
                type="checkbox" 
                id = {props.name}
                name={props.name} />
                {props.text}
        </label>
        </div>
    )
}

export default Checkbox;