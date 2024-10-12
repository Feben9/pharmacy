import React from "react";
import Navbar from "../components/Navbar";

const Users = () => {
    return (
        <div className="main-container">
            <div className="nav-container">
                <Navbar isAuthenticated={true}/>
            </div>
            <div className="page-container">
                <h1 style={{padding:"10px 0px", fontWeight:"bold"}}>Roles</h1>
                <form>
                    <button>Create New Role</button>
                    <br />
                    <button>Assign User</button>
                    <br />
                    <button>Create User</button>
                </form>
            </div>
        </div>
    )
};
 
export default Users;