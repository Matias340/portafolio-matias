import React from 'react';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import Home from './ecommerce/Home';
import HomePage from './homepage/HomePage';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<HomePage />} />  
      <Route path='/ecommerce' element={<Home/>} />
      </Routes>

    </div>
  );
}

export default App;
