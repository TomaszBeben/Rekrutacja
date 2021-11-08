import React from 'react'
import { GlobalState } from '../../context/Context'

const SearchBar = () => {
    const { setSearch } = GlobalState();

    return (
        <>
            <input
                data-testid= 'search-bar'
                className= 'search-bar'
                type= "text"
                placeholder= 'Search by user name...'
                onChange={(event) => setSearch(event.target.value)}
            />
        </>
    )
}

export default SearchBar
