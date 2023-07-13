import React from 'react';
import './App.css';
import Header from './composents/header/header';
import Router from './composents/router/routes';
//import Count from './composents/count/count';

function App() {
  return (
    <div className='App'>
      <Header/>      
      <Router />
    </div>
  );
}

export default App;
