import React from 'react';
import ReactDOM from 'react-dom';
import './Shared/styles/styles.scss';

import SignIn from './Sign/Shared/Components/Sign'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        <div>
            <SignIn />
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('App'))