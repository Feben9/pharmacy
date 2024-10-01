import React from "react";
import Navbar from "../components/Navbar"; 

const Branch = () => {
    return (
        <div className="main-container">
            <div className="nav-container">
                <Navbar />
            </div>
            <div className="page-container">
                <div style={{paddingLeft: "20px"}}>
                    <h1>Channel 1</h1>
                </div>
                <div style={{paddingLeft: "20px"}}>
                    <h1>ID</h1>
                </div>
                <div style={{paddingLeft: "20px"}}>
                    <button>Location</button>
                </div>
            </div>
        </div>
    );
};
 
export default Branch;