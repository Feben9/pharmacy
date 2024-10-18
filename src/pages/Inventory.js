import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "./Modal";
 
const Inventory = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);
 //   
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
//
    const toggleDropdown = (id) => {
        setDropdownOpen(dropdownOpen === id ? null : id);
    };

    const handleView = (id) => {
        alert(`View item with id: ${id}`);
    };

    const handleEdit = (id) => {
        alert(`Edit item with id: ${id}`);
    };

    const handleDelete = (id) => {
        alert(`Delete item with id: ${id}`);
    };


    return (
        <div className="main-container">
            <div className="nav-container">
                <Navbar isAuthenticated={true}/>
            </div>
            <div className="page-container">
                <table className="table-container">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>Origin</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>011</td>
                            <td>Amoxicillin</td>
                            <td>453.00</td>
                            <td>45</td>
                            <td>some description</td>
                            <td>branch 4</td>   
                            <td>India</td>   
                            <td>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" onClick={() => toggleDropdown(1)}>
                                        ⋮
                                    </button>
                                    {dropdownOpen === 1 && (
                                        <div className="dropdown-menu">
                                            <button onClick={handleOpenModal}>View</button> <br/>
                                                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                                    <h2>New Window Content</h2>
                                                    <p>This is where further details are displayed.</p>
                                                    <tbody>
                                                        <tr>
                                                            <td>Test</td>
                                                            <td>Test</td>
                                                            <td>Test</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Test</td>
                                                            <td>Test</td>
                                                            <td>Test</td>
                                                        </tr>
                                                    </tbody>
                                                </Modal>
                                            <button onClick={handleOpenModal}>Edit</button> <br/>
                                                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                                    <h2>New Window Content</h2>
                                                    <p>This is where further details are displayed.</p>
                                                </Modal>
                                            <button onClick={() => handleDelete(1)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>  
                        <tr>
                            <td>012</td>
                            <td>Penicilin</td>
                            <td>453.00</td>
                            <td>45</td>
                            <td>some description</td>
                            <td>branch 1</td>  
                            <td>Ethiopia</td>   
                            <td>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" onClick={() => toggleDropdown(2)}>
                                        ⋮
                                    </button>
                                    {dropdownOpen === 2 && (
                                        <div className="dropdown-menu">
                                            <button onClick={handleOpenModal}>View</button> <br/>
                                                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                                    <h2>New Window Content</h2>
                                                    <p>This is where further details are displayed.</p>
                                                </Modal>
                                            <button onClick={handleOpenModal}>Edit</button> <br/>
                                                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                                    <h2>New Window Content</h2>
                                                    <p>This is where further details are displayed.</p>
                                                </Modal>
                                            <button onClick={() => handleDelete(2)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            </td> 
                        </tr>  
                        <tr>
                            <td>013</td>
                            <td>Goffen</td>
                            <td>453.00</td>
                            <td>45</td>
                            <td>some description</td>
                            <td>branch 2</td>   
                            <td>China</td>   
                            <td>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" onClick={() => toggleDropdown(3)}>
                                        ⋮
                                    </button>
                                    {dropdownOpen === 3 && (
                                        <div className="dropdown-menu">
                                            <button onClick={handleOpenModal}>View</button> <br/>
                                                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                                    <h2>New Window Content</h2>
                                                    <p>This is where further details are displayed.</p>
                                                </Modal>
                                            <button onClick={handleOpenModal}>Edit</button> <br/>
                                                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                                    <h2>New Window Content</h2>
                                                    <p>This is where further details are displayed.</p>
                                                </Modal>
                                            <button onClick={() => handleDelete(3)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>  
                        <tr>
                            <td>014</td>
                            <td>Losartan</td>
                            <td>453.00</td>
                            <td>45</td>
                            <td>some description</td>
                            <td>branch 6</td>  
                            <td>Kenya</td>    
                            <td>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" onClick={() => toggleDropdown(4)}>
                                        ⋮
                                    </button>
                                    {dropdownOpen === 4 && (
                                        <div className="dropdown-menu">
                                            <button onClick={handleOpenModal}>View</button> <br/>
                                                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                                    <h2>New Window Content</h2>
                                                    <p>This is where further details are displayed.</p>
                                                </Modal>
                                            <button onClick={handleOpenModal}>Edit</button> <br/>
                                                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                                    <h2>New Window Content</h2>
                                                    <p>This is where further details are displayed.</p>
                                                </Modal>
                                            <button onClick={() => handleDelete(4)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>    
                        <tr>
                            <td>015</td>
                            <td>Panadol</td>
                            <td>453.00</td>
                            <td>45</td>
                            <td>some description</td>
                            <td>branch 8</td>  
                            <td>Germany</td>    
                            <td>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" onClick={() => toggleDropdown(5)}>
                                        ⋮
                                    </button>
                                    {dropdownOpen === 5 && (
                                        <div className="dropdown-menu">
                                            <button onClick={handleOpenModal}>View</button> <br/>
                                                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                                    <h2>New Window Content</h2>
                                                    <p>This is where further details are displayed.</p>
                                                </Modal>
                                            <button onClick={handleOpenModal}>Edit</button> <br/>
                                                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                                    <h2>New Window Content</h2>
                                                    <p>This is where further details are displayed.</p>
                                                </Modal>
                                            <button onClick={() => handleDelete(5)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    );
};
 
export default Inventory;