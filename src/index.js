import React from 'react';
import ReactDOM from 'react-dom';

// imported components
import App from './App';

// imported function
import { ContextComponent } from './context/Context';

// imported styles
import './index.css';

ReactDOM.render(
  // wrapper for global state
  <ContextComponent>
    <App />
  </ContextComponent>,
  document.getElementById('root')
);
