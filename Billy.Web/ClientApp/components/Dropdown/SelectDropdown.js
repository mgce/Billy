import React from 'react';
import Select from 'react-select';

const SelectDropdown = ({
    input, 
    onChange,
    options,
    categories,
    placeholder,
    ...props
}) => {
    const handleBlur = e => {
        e.preventDefault()
    };
    return(
        <Select
            options = {options}
            value={input.value}
            onBlur={handleBlur}
            placeholder = {placeholder || "Select..."}
            onChange = {input.onChange}
            onBlurResetsInput = {false}
        />
    )
}

export default SelectDropdown;