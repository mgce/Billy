import React from 'react';
import PropTypes from 'prop-types';

const FormLabel = ({labelName}) => {
    return(
        <label className="form-label">
            {labelName}
        </label>
    )
}

FormLabel.propTypes = {
    labelName: PropTypes.string.isRequired
}

export default FormLabel;