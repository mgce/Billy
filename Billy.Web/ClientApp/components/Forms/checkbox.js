import React from 'react';

const Checkbox = props => {
    return(
        <div>
        <label for={props.name} className="checkbox-label">
        <input 
                className="regular-checkbox"
                type="checkbox" 
                id = {props.name}
                name={props.name} 
                value = {props.name}/>
                {props.text}
        </label>
        </div>
    )
}

export default Checkbox;