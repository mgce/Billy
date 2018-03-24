import React from 'react';
import {Logo} from 'General';
import {Sidebar} from 'HomeSidebar';
import {Navbar} from 'HomeNavbar';
import {Content} from 'HomeContent';
import {Table} from 'Tables';

class HomeContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
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



export default Home;


