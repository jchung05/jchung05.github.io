import React from 'react';

// import logo from './logo.svg';
import './App.scss';

import TopMenu from './components/top-menu';

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
