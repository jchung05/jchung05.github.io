import React from 'react';

import './App.scss';

import TopMenu from './components/top-menu';
import Landing from 'pages/landing';

import 'bootstrap/dist/css/bootstrap.css';

// TODO: Fix the white space when overflow scroll bounces

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <TopMenu />
      </div>
    </div>
  );
}

export default App;
