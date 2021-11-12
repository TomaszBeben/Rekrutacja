import React from 'react';

// imported function
import { GlobalState } from '../../context/Context';

// imported styles
import './searchBar.css';

const SearchBar = () => {
    // varaible needed to put value into search state
    const { setSearch } = GlobalState();

    return (
        <>
            <input
                // id for test
                data-testid= 'search-bar'

                className= 'search-bar'
                type= "text"
                placeholder= 'Search by user name...'
                onChange={(event) => setSearch(event.target.value)}
            />
        </>
    );
};

export default SearchBar;
