import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/me' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
