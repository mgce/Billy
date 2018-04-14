import { PrivateRoute } from 'Components/PrivateRoute/PrivateRoute';
import { 
    Router, 
    Route, 
    browserHistory 
} from 'react-router'
import HomeContainer from 'Scenes/Home/Home'
import SignIn from 'Scenes/Sign/Sign'
import {syncHistoryWithStore} from 'react-router-redux';
import {createBrowserHistory} from 'history';
import {push} from 'react-router-redux';
import LoadingPage from 'Scenes/LoadingPage/LoadingPage';
import store from './../../store'
import React from 'react';

const history = syncHistoryWithStore(createBrowserHistory(), store)

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router history={history}>
                <div className="app-container">
                    <PrivateRoute exact path='/' component={HomeContainer}/>
                    <Route path="/login" component={SignIn}/>
                </div>
            </Router>
        )
    }
}