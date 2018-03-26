import React from 'react';
import {Input} from 'Forms'
import {ApplyButton} from 'Buttons'
import SearchInput from '../SearchInput/searchInput'

const Navbar = props => {
    return(
        <div className="navbar">
            <SearchInput />
            <ApplyButton name="+ Add new" />
        </div>
    )
}

export default Navbar;