import './App.css';
import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Home from "./pages";
import Inventory from "./pages/Inventory";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import Upload from "./pages/Upload";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App" >
      <Router>
        <Navbar isAuthenticated={isAuthenticated} />
        <Routes>
            <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/upload" element={
              isAuthenticated ? <Upload /> : <Navigate to="/" />
            } />

            <Route exact path="/" element={<Home />} />
            <Route path="/Inventory" element={<Inventory />} />
            
            <Route path="/Login" element={<Login />} />
            <Route path="/Upload" element={<Upload />} />
            
            <Route
                path="/contact"
                element={<Contact />}
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route
                path="/sign-up"
                element={<SignUp />} 
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
