import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes/Routes'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
