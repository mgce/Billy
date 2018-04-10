import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import SignIn from './scenes/Sign/Sign'
import HomeContainer from './scenes/Home/Home'
import {BillyHttpClient, Helpers} from 'Others'
import LoadingPage from './scenes/LoadingPage/LoadingPage';
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isUserLogged: null
        }
    }
    componentDidMount(){
         BillyHttpClient.authenticate()
        .then(response =>{
            this.setState({
                isUserLogged: response.data
            })
        }) 
    }
    signInUser(){
        this.setState({isUserLogged : true})
    }
    render(){
        const isUserLoggedDefine = 
            Helpers.isUndefinedOrNull(this.state.isUserLogged);
        const isUserLogged = this.state.isUserLogged;
        return(
            <Router>
                <div className="app-container">
                { isUserLoggedDefine
                ? <LoadingPage/>
                : <Route exact path="/" component={()=>(
                        isUserLogged
                        ? <HomeContainer signInUser={this.signInUser.bind(this)}/>
                        : <SignIn signInUser={this.signInUser.bind(this)} />
                    )}/>
                }
                    
                </div>
            </Router>
        )
    }
}



ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, 
    document.getElementById('App')
)
