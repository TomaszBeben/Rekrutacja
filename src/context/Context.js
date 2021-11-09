import React, { useContext, useState } from 'react';

const Context = React.createContext();

export const GlobalState = () => {
    return useContext(Context)
};

export const ContextComponent = ({ children }) => {
    const [users, setUsers] = useState();
    const [search, setSearch] = useState('');
    const url = 'https://jsonplaceholder.typicode.com/users';

    const value = {
        users, setUsers,
        search, setSearch,
        url,
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}
