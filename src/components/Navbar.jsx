import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"

function Navbar() {
    return (
        <div className="side-menu">
             <img className='logo-top' src={Logo} alt=""/>
             <div className="menu-container">
             <ul>
                <li><Link to="/" className="menu-item">Home</Link></li>
                <li><Link to="/transaction" className="menu-item">Add Transaction</Link></li>
                <li><Link to="/register" className="menu-item">Add Client</Link></li>
                <li><Link to="/list" className="menu-item">List Clients</Link></li>
                <li><Link to="/prod_register" className="menu-item">Add Product</Link></li>
                <li><Link to="/prod_list" className="menu-item">List Products</Link></li>
                <li><Link to="/user_register" className="menu-item">Add User</Link></li>
            </ul>
            <button className="sign-out">SIGN-OUT</button>
             </div>
           
        </div>
    )
}

export default Navbar
