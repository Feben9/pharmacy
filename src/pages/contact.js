import React from "react";

import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <div className="main-container">
            <div className="nav-container">
                <Navbar isAuthenticated={true}/>
            </div>
            <div className="page-container">
                <h1>
                    Mail us on 
                    feedback@mail.org
                </h1>
            </div>
        </div>
    );
};
 
export default Contact;