import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import SignInContainer from './scenes/Sign/Sign'
import HomeContainer from './scenes/Home/Home'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <Router>
                <div className="app-container">
                    {/* <Route exact path="/" component={Home}/>
                    <Route path="/login" component={SignInContainer}/> */}

                    <Route exact path="/" component={()=>(
                        localStorage.getItem('user')
                        ? <HomeContainer />
                        : <SignInContainer />
                    )}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('App'))
