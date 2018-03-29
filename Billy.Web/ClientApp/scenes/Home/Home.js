import React from 'react';
import {Logo} from 'General';
import {Sidebar} from 'HomeSidebar';
import {Navbar} from 'HomeNavbar';
import {Content} from 'HomeContent';
import {Table} from 'Tables';
import axios from 'axios';
import {Helpers} from 'Others';

class HomeContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount = () =>{
    }
    render(){
        return(
            <Home />
        )
    }
}

const Home = props =>{
    return(
        <div className="home-container">
            <Sidebar/>
            <Navbar />
            <Content />
        </div>
    )
}



export default HomeContainer;
