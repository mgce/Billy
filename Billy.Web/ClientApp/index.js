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
import Helpers from 'Helpers/Helpers'
import Loading from './scenes/Loading/Loading';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isUserLogged: null
        }
    }
    componentDidMount(){
         BillyHttpClient.isAuthenticated()
        .then(response =>{
            this.setState({
                isUserLogged: response.data
            })
        }) 
    }
    render(){
        const isUserLoggedDefine = 
            Helpers.isUndefinedOrNull(this.state.isUserLogged);
        const isUserLogged = this.state.isUserLogged;
        return(
            <Router>
                <div className="app-container">
                { isUserLoggedDefine
                ? <Loading/>
                : <Route exact path="/" component={()=>(
                        isUserLogged
                        ? <HomeContainer />
                        : <SignInContainer />
                    )}/>
                }
                    
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('App'))
