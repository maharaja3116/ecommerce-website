import React from "react";

import { Outlet, Link } from "react-router-dom";
import './navbar.css';

export default function Layout()
{
    return(
        <>
         <nav className="navbar">
            <ul style={{listStyle:"none"}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
               
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}