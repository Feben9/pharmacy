import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    
    return (
        <>
            <Nav>
                <NavMenu>               
                    <NavLink to="/Login" activeStyle>
                        Login
                    </NavLink>
                    <NavLink to="/Upload" activeStyle>
                        Upload
                    </NavLink>
                    <NavLink to="/bulkupload" activeStyle>
                        Bulk Upload
                    </NavLink>
                    <NavLink to="/Inventory" activeStyle>
                        Inventory
                    </NavLink> 
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>                    
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;