import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import Upload from "./pages/Upload";

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
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
