import React from 'react';
import {Logo} from 'General';
import {Sidebar} from 'HomeSidebar';
import {Navbar} from 'HomeNavbar';
import {Content} from 'HomeContent';
import {actions} from 'Ducks/Home'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {AddBill} from 'Scenes/AddBill';

const Home = ({
    home: {addBillModalOpen},
    hideAddBillModal
}) =>{
    return(
        <div className="home-container">
            {addBillModalOpen &&
                <AddBill hideModal={hideAddBillModal}/>}
            <Sidebar/>
            <Navbar />
            <Content />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        home: state.home
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        ...actions
    }, dispatch)
})


export default connect(
    mapStateToProps, 
    mapDispatchToProps)(Home)

