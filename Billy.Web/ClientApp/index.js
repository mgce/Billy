import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import 'react-select/dist/react-select.css';
import { Provider, connect} from 'react-redux'
import store from './store'
import { bindActionCreators } from 'redux';
import App from 'Scenes/App'
import {push} from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapDispatchToProps = dispatch => bindActionCreators({
  push: () => push('/')
}, dispatch)

export default connect(null, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store = {store}>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </Provider>, 
    document.getElementById('App')
);
