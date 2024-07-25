import './App.css';
import React, {useState} from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "./pages/Login";
import Upload from "./pages/Upload";

import Inventory from "./pages/Inventory";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App" >
      <Router basename="/" >        
        <Routes>
            <Route exact path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

            <Route path="/upload" element={isAuthenticated ? <Upload /> : <Login />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/blogs" element={<Blogs />} />

            <Route path="/sign-up" element={<SignUp />} />
            
            <Route path="/inventory" element={<Inventory />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
