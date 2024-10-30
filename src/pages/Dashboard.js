import React from "react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
    return (
        <div className="main-container">
            <div className="nav-container">
                <Navbar isAuthenticated={true}/>
            </div>
            <div className="page-container">
                
            </div>
        </div>
    )
};
 
