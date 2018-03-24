import React from 'react';

const SearchInput = props =>{
    return(
        <div className="search-bill">
            <input 
            className="form-input"
            name="searchBill"
            type="text"
            placeholder="search bill"/>
        </div>
    )
}

export default SearchInput;