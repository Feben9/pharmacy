import React from 'react';

export default function Upload() {
    return (
        <div className="main-container">
            <div className="nav-container">
                <ul>
                    <li>DASHBOARD</li>
                    <li>UPLOAD</li>
                    <li>BULK UPLOAD</li>
                    <li>INVENTORY</li>
                    <li>CHANNELS</li>
                    <li>REPORTS</li>
                    <li>SECURITY</li>
                </ul>
            </div>
            <div className="page-container">
                <form className="upload-form-container"> 
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
                    <input type="text" id="branch"/> <br />

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
                </form>
            </div>
        </div>
    );
}