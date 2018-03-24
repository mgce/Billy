import React from 'react';
import Logo from '../../components/General/logo'
import Sidebar from '../Home/scenes/Sidebar/index'
import Navbar from '../Home/scenes/Navbar/index'
import Content from '../Home/scenes/Content/index'
import Table from '../../components/Table/index'

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


const tableHeder = [
    "Dostawca", "Termin", "Pozostało",
    "Kwota", "Status", "Kategoria"];

const tableContent = [
    ["T-mobile", "03.09", "3 dni", 
    "10zl", "Open", "Dom"],
    ["Orange", "13.09", "7 dni", 
    "120zl", "Open", "Telefon"],
]