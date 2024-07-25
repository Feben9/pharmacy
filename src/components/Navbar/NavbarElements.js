import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: #212F3D;
    height: 100vh;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    position: fixed;
    top: 100;
    left: 10;
    z-index: 12;

    flex: 0 0 25%;
    overflow: hidden;
    border: 1px solid var(--secondary-color);
    border-radius: 15px; 
    box-sizing: border-box;
    padding: 5rem;
`;
 
export const NavLink = styled(Link)`
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #4d4dff;
    }
`;
 
export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
 
export const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    border: 2px solid aqua;
    padding: 20px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;