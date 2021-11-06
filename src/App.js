/* eslint-disable array-callback-return */
import React from 'react';

import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import Users from './components/users/Users';

function App() {

  return (
    <div className='main-container'>
      <Header/>
      <SearchBar/>
      <Users/>
    </div>
  );
};

export default App;
