import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

const Context = React.createContext();

export const GlobalState = () => {
    return useContext(Context)
};

export const ContextComponent = ({ children }) => {
    const [users, setUsers] = useState();
    const [search, setSearch] = useState('');
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        axios({
          method: 'GET',
          url: url,
        }).then(res => {
          setUsers(res.data)
        }).catch(e => {
          console.error(e.message);
        })
      }, []);

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
