import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
          <Router basename="/dog">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
            </Routes>
          </Router>
  );
}

export default App;
