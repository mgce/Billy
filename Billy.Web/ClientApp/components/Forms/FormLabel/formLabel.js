import React from 'react';
import PropTypes from 'prop-types';

const FormLabel = ({name}) => {
    return(
        <label className="form-label">
            {name}
        </label>
    )
}

FormLabel.propTypes = {
    name: PropTypes.string.isRequired
}

export default FormLabel;