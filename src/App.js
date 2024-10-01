import './App.css';
import React, {useState} from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Login from "./pages/Login";
import Upload from "./pages/Upload";

import Inventory from "./pages/Inventory";
import BulkUpload from "./pages/BulkUpload";
import Branch from "./pages/Branch";
import Contact from "./pages/Contact";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App" >
      <Router >        
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route exact path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

            <Route path="/upload" element={isAuthenticated ? <Upload /> : <Login setIsAuthenticated={setIsAuthenticated} />} />

            <Route path="/bulkupload" element={<BulkUpload />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/branch" element={<Branch />} />
            
            <Route path="/inventory" element={<Inventory />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
