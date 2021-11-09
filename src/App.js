import React,{ useEffect } from 'react';
import axios from 'axios';
import { GlobalState } from './context/Context';

import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import Users from './components/users/Users';

function App() {
  const { setUsers, url } = GlobalState()

  useEffect(() => {
        axios({
          method: 'GET',
          url: url,
        }).then(res => {
          setUsers(res.data)
        }).catch(e => {
          console.error(e.message);
        })
      }, [setUsers, url]);

  return (
    <div className='main-container'>
      <Header/>
      <SearchBar/>
      <Users/>
    </div>
  );
};

export default App;
