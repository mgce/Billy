import React from 'react';
import Input from '../../../../components/Forms/input'
import ApplyButton from '../../../../components/Buttons/applyButton'
import SearchInput from '../Navbar/components/searchInput'

const Navbar = props => {
    return(
        <div className="navbar">
            <SearchInput />
            <ApplyButton name="Add new" />
        </div>
    )
}

export default Navbar;