import React, { useEffect } from 'react';

import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import Users from './components/users/Users';

import { fetchData } from './api/fetch';
import { GlobalState } from './context/Context';

import './App.css';

function App() {
  const { setUsers, url, setApiMessage } = GlobalState()

  useEffect(() => {
    fetchData(url, setUsers, setApiMessage)
  }, [setUsers, url, setApiMessage ]);

  return (
    <div className='main-container'>
      <Header />
      <SearchBar />
      <Users />
    </div>
  );
};

export default App;
