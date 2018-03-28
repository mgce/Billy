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
import BillyHttpClient from './components/Helpers/BillyHttpClient'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isUserLogged:false
        }
    }
    componentWillMount(){
        this.setState((prevState)=>{
            isUserLogged: BillyHttpClient.isAuthenticated()
        })
    }
    render(){
        return(
            <Router>
                <div className="app-container">
                    {/* <Route exact path="/" component={Home}/>
                    <Route path="/login" component={SignInContainer}/> */}

                    <Route exact path="/" component={()=>(
                        this.state.isUserLogged
                        ? <HomeContainer />
                        : <SignInContainer />
                    )}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('App'))
