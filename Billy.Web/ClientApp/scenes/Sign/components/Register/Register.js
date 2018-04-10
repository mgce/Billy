import React from 'react';
import RegisterForm from '../Forms/RegisterForm/RegisterForm'
import {actions} from 'Ducks/Register'
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    login: state.register
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        ...actions
    }, dispatch)
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(RegisterForm);
