import React from 'react';
import Logo from '../../components/General/logo'

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





const SearchInput = props =>{
    return(
        <div>

        </div>
    )
}

const Navbar = props => {
    return(
        <div className="navbar">
        <SearchInput />
        </div>
    )
}

const Content = props => {
    return(
        <div className="content">
            test
        </div>
    )
}

export default Home;