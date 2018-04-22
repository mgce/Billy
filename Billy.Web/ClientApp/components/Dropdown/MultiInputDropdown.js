import React from 'react';
import {Fragment} from 'react';
import {Creatable} from 'react-select';

const MultiInputDropdown = ({
    input, 
    onChange,
    options,
    categories,
    placeholder,
    ...props
})=>{
    const handleBlur = e => {
        e.preventDefault()
    };
    return(
        
        <Fragment>
            <Creatable 
                options = {categories}
                value={input.value}
                onBlur={handleBlur}
                placeholder = {placeholder || "Select..."}
                onChange = {input.onChange}
                onBlurResetsInput = {false}
            />
        </Fragment>
            
    )
}

export default MultiInputDropdown;
