import React from 'react';

export default function Upload() {
    return (
        <div>
            <aside>
                <ol>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                    <li>item 5</li>
                </ol>
            </aside>
            <div>
                <form className="upload-form-container"> 
                    <label for="drug-id">ID</label> <br />
                    <input type="text" id="drug-id"/> <br />
                    <label for="name">Name</label> <br />
                    <input type="text" id="name"/> <br />
                    <label for="price">Price</label> <br />
                    <input type="number" id="price"/> <br />
                    <label for="qty">Quantity</label> <br />
                    <input type="number" id="qty"/> <br />
                    <label for="desc">Description</label> <br />
                    <input type="text" id="desc"/> <br />
                    <label for="branch">Location</label> <br />
                    <input type="text" id="branch"/> <br />
                    <label for="img">Image</label> <br />
                    <input type="image" id="img" alt="some img"/> <br />
                    <label for="branch">Location</label> <br />
                    <input type="text" id="branch"/> <br />
                    <label for="file">Upload</label> <br />
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