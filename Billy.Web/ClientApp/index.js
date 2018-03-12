import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import SignIn from './scenes/Sign/scenes/Login/index'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <SignIn />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('App'))