import React from "react";
import Navbar from "../components/Navbar";

const Reports = () => {
    return (
        <div className="main-container">
            <div className="nav-container">
                <Navbar isAuthenticated={true}/>
            </div>
            <div className="page-container">
                <h1>Reports</h1>
                <button>Compare branch by</button>
                <p>Stock for a drug</p>
                <p>Sales for a drug</p>
                <p>allow multiple selection</p>
                <p>track trend over time</p>
            </div>
        </div>
    )
};
 
export default Reports;