import React from 'react';
import LoginForm from '../Forms/LoginForm/LoginForm'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {actions} from 'Ducks/Login'

const mapStateToProps = (state) => ({
    props: state.login
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        ...actions
    }, dispatch)
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(LoginForm)
