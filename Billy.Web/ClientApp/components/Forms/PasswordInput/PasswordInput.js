import PropTypes from 'prop-types';

const PasswordInput = props =>{
    const {name, link, onBlur} = props;
    return(
        <input
            {...link.props}
            className = {link.error ? "error-form-input" : "form-input"}
            name={name}
            onBlur = {e => onBlur(name)}
            type= "password" 
            />
    )
}

PasswordInput.propTypes = {
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
}

export default PasswordInput;