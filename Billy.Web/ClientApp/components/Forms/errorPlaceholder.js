import React from 'react';
import PropTypes from 'prop-types';

const ErrorPlaceholder = ({errorMessage}) =>{
    return(
        <div className="error-placeholder">
                {errorMessage || ''}
        </div>
    )
}

ErrorPlaceholder.propTypes = {
    errorMessage: PropTypes.string
}

export default ErrorPlaceholder;