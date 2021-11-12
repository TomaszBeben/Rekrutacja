import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextComponent } from './context/Context';

import './index.css';

ReactDOM.render(
  //
  <ContextComponent>
    <App />
  </ContextComponent>,
  document.getElementById('root')
);
