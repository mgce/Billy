import React from 'react';

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

const Sidebar = props =>{
    return(
        <div className="sidebar">
        test
        </div>
    )
}

const Navbar = props => {
    return(
        <div className="navbar">

        </div>
    )
}

const Content = props => {
    return(
        <div className="content">

        </div>
    )
}

export default Home;