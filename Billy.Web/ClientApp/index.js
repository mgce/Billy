import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import SignInContainer from './scenes/Sign/Sign'
import Home from './scenes/Home/Home'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={SignInContainer}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('App'))