import React from 'react';
import PropTypes from 'prop-types';
import {Input, ErrorPlaceholder, FormLabel} from 'Forms'

const InputGroup = ({
    labelName, 
    name, 
    link, 
    type, 
    onBlur
    }) =>{
    return(
        <div className="form-group">
            <FormLabel labelName={labelName}/>
            <Input 
                name={name}
                type={type} 
                link={link} 
                onBlur={onBlur}/>
            <ErrorPlaceholder errorMessage = {link.validationError || "" }/>
        </div>
    )
}

InputGroup.propTypes = {
    labelName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.object.isRequired,
    type: PropTypes.string,
    onBlur: PropTypes.func
}

export default InputGroup;
