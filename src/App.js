import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
          <BrowserRouter basename="/dog">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
            </Routes>
          </BrowserRouter>
  );
}

export default App;
