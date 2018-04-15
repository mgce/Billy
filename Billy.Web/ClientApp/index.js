import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { Provider, connect} from 'react-redux'
import store from './store'
import { bindActionCreators } from 'redux';
import App from 'Scenes/App'
import {push} from 'react-router-redux';

const mapDispatchToProps = dispatch => bindActionCreators({
  push: () => push('/')
}, dispatch)

export default connect(null, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, 
    document.getElementById('App')
);
