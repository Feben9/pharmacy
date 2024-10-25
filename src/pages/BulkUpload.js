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
                    <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    <a style={{textDecoration:"none"}} 
                    href="https://file-examples.com/wp-content/storage/2017/02/file_example_XLS_10.xls" 
                    download="sample">Download sample form</a>
                    </button>
                    <label for="file" className="label"></label> <br />
                    <input type="file" id="file" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-1 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"/> <br />

                    <input type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" value="Upload" /> <br />
                </form>
            </div>
        </div>
    )
};
 
export default BulkUpload;