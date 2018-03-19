import PropTypes from 'prop-types';

const Input = props =>{
    const {name, link, onBlur} = props;
    return(
        <input
            {...link.props}
            className = {link.error ? "error-form-input" : "form-input"}
            name={name}
            onBlur = {e => onBlur(name)}
            type= "text" 
            />
    )
}

Input.propTypes = {
    name: PropTypes.string,
    onBlur: PropTypes.func,
}
