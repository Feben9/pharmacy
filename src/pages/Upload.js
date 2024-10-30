import React from 'react';
import Navbar from "../components/Navbar";

export default function Upload() {
    return (
        <div className="main-container">
            <div className="nav-container">
               <Navbar isAuthenticated={true}/>
            </div>
            <div className="page-container">
                {/* <form className="upload-form-container"> 
                    <label for="drug-id" className="label">ID</label> <br />
                    <input type="text" id="drug-id"/> <br />

                    <label for="name" className="label">Name</label> <br />
                    <input type="text" id="name"/> <br />

                    <label for="price" className="label">Price</label> <br />
                    <input type="number" id="price"/> <br />

                    <label for="qty" className="label">Quantity</label> <br />
                    <input type="number" id="qty"/> <br />

                    <label for="desc" className="label">Description</label> <br />
                    <input type="text" id="desc"/> <br />

                    <label for="branch" className="label">Location</label> <br />
                    <input type="text" id="branch"/> <br /> <br /> <br />

                    <label for="branch" className="label">Location</label> <br />
                    <input type="text" id="branch"/> <br />

                    <label for="img" className="label">Image</label> <br />
                    <input type="file" id="img" alt="some img"/> <br />

                    <label for="file" className="label">Upload</label> <br />
                    <input type="file" id="file"/> <br />

                    <input type="submit" value="Add" /> <br />
                    <input type="submit" value="Update" /> <br />
                    <input type="reset" value="Clear" /> <br />
                    <input type="submit" value="Delete" />
                </form> */}

                        
        <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2 overflow-y-visible">
                <div>
                    <label for="idnumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                    <input type="text" id="idnumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="number" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>  
                <div>
                    <label for="qty" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                    <input type="number" id="qty" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div>            
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
                <div>
                    <label for="branch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                    <input type="text" id="branch" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <label for="img" className="font-medium text-gray-900 dark:text-white">Image</label> <br />
                <input class="block w-full mb-5 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="img" type="file" />
                <br />
                <input type="submit" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" value="Upload" /> <br />
            </div>
            
            <button type="submit" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add</button>
            
            <button type="submit" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Update</button>
            
            <button type="reset" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Clear</button>
            
            <button type="submit" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</button>
        </form>

            </div>
        </div>
    );
}