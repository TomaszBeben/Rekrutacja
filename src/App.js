import React, { useEffect } from 'react';
import { fetchData } from './api/fetch';

import { GlobalState } from './context/Context';

import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import Users from './components/users/Users';

function App() {
  const { setUsers, url } = GlobalState()

  useEffect(() => {
    fetchData(url, setUsers)
  }, [setUsers, url]);

  return (
    <div className='main-container'>
      <Header />
      <SearchBar />
      <Users />
    </div>
  );
};

export default App;
