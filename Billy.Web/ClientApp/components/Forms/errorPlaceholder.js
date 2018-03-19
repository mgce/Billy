const ErrorPlaceholder = ({errorMessage}) =>{
    return(
        <div className="error-placeholder">
                {errorMessage || ''}
        </div>
    )
}

export default ErrorPlaceholder;