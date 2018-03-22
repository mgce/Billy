import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import SignInContainer from './scenes/Sign/scenes/Login/index'
import Home from './scenes/Home/index'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
                //<SignInContainer />
                <Home />
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('App'))