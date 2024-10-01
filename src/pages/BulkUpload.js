import React from "react";
import Navbar from "../components/Navbar";

const BulkUpload = () => {
    return (
        <div className="main-container">
            <div className="nav-container">
                <Navbar isAuthenticated={true}/>
            </div>
            <div className="page-container">
                <div style={{padding:"50px"}}></div>
                <form className="upload-form-container"> 
                    <button>
                    <a style={{color:"black", textDecoration:"none"}} 
                    href="https://file-examples.com/wp-content/storage/2017/02/file_example_XLS_10.xls" 
                    download="sample">Download sample form</a>
                    </button>
                    <label for="file" className="label"></label> <br />
                    <input type="file" id="file"/> <br />

                    <input type="submit" value="Upload" /> <br />
                </form>
            </div>
        </div>
    )
};
 
export default BulkUpload;