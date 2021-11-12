import React, { useEffect } from 'react';

// imported components
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import Users from './components/users/Users';

// imported function
import { fetchData } from './api/fetch';
import { GlobalState } from './context/Context';

// imported styles
import './App.css';

function App() {
  // variables needed to fetch data
  const { setUsers, url, setApiMessage } = GlobalState()

  // useEffect to prevent infinite loop of fetching data
  useEffect(() => {
    fetchData(url, setUsers, setApiMessage)

    //deendency array
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
