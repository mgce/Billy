import React from 'react';
import SignType from '../SignType/SignType'
import Login from '../Login/Login'
import Register from '../Register/Register'
import {actions} from 'Ducks/SignIn'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';

let SignInRight = ({
    state,
    loginVisible,
    changeSignType
}) => {
    var signContainer = loginVisible ? 
          (<Login/>) : 
          (<Register/>)

    return(
       <div>
        <SignType 
            changeSignType = {changeSignType} 
            loginVisible ={loginVisible}/>
            <div className="login-container">
                <div className="login-box">
                    {signContainer}
                </div>
            </div>
       </div>
    )
}

SignInRight.propTypes = {
    loginVisible: PropTypes.bool.isRequired,
    changeSignType: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        loginVisible: state.signIn.loginVisible
    }
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        ...actions
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(SignInRight)