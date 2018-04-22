import { PrivateRoute } from 'Components/PrivateRoute/PrivateRoute';
import { 
    //BrowserRouter as Router, 
    Router,
    Switch,
    Route, 
} from 'react-router-dom';
import Home from 'Scenes/Home/Home';
import SignIn from 'Scenes/Sign/Sign';
import LoadingPage from 'Scenes/LoadingPage/LoadingPage';
import store from './../../store';
import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import {history} from './../../history';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router history={history}>
                <div className="app-container">
                    <Switch>
                        <PrivateRoute exact path='/' component={Home}/>
                        <Route path="/login" component={SignIn}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}