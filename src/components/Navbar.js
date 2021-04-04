import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <main>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">BuyMe</NavLink>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <NavLink className="m-2" to="/signup">Sign Up</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="m-2" to="/login">Login</NavLink>
                </li>
            </ul>
            </div>
        </nav>
        </main>
    )
}

export default Navbar
