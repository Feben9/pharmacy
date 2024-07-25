import React from "react";
import Navbar from "../components/Navbar";

const Blogs = () => {
    return (
        <div className="main-container">
            <div className="nav-container">
                <Navbar isAuthenticated={true}/>
            </div>
            <div className="page-container">
                <h1>You can write your blogs!</h1>
            </div>
        </div>
    )
};
 
export default Blogs;