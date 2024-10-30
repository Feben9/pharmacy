import React from "react";
import Navbar from "../components/Navbar"; 

const Branch = () => {
    return (
        <div className="main-container">
            <div className="nav-container">
                <Navbar />
            </div>
            <div className="page-container">
                <div class="flex justify-start gap-4 ml-2">
                    <h1 class="bg-auto w-48 p-1 rounded-md bg-slate-600 hover:bg-slate-700 border">Channel 1</h1>
                
                    <h1 class="bg-auto w-48 p-1 rounded-md bg-slate-600 hover:bg-slate-700 border">ID</h1>
                </div>
                <div style={{paddingLeft: "20px"}}>
                    <button class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-xl font-medium text-center text-white border-2 border-zinc-200 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Location</button>
                </div>
            </div>
        </div>
    );
};
 
export default Branch;