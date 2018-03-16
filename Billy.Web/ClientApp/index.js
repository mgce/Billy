import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import SignInContainer from './scenes/Sign/scenes/Login/index'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
                <SignInContainer />
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('App'))