import React from 'react'
import { GlobaState } from '../../context/Context'

const SearchBar = () => {
    const {setSearch} = GlobaState();
    
    return (
        <>
            <input
                className='search-bar'
                type="text"
                placeholder='Search by '
                onChange={(event) => setSearch(event.target.value)}
            />
        </>
    )
}

export default SearchBar
