import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Add Client</Link></li>
                <li><Link to="/list">List Client</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
