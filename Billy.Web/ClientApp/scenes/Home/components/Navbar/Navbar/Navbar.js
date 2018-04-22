import React from 'react';
import {Input} from 'Forms'
import {ApplyButton} from 'Buttons'
import SearchInput from '../SearchInput/searchInput'
import {actions} from 'Ducks/Home'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


const Navbar = ({
    showAddBillModal
}) => {
    return(
        <div className="navbar">
            <SearchInput />
            <ApplyButton 
                name="+ Add new"
                onClick={showAddBillModal} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        ...actions
    }, dispatch)
})

export default connect(
    null, 
    mapDispatchToProps)(Navbar)
