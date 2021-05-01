import React, {useContext} from 'react'
import AppContext from './AppContext'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const {currentUser, logout} = useContext(AppContext)
    return (
        <main>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">BuyMe</NavLink>
                
                {/* if logged in, render username with dropdown else signup/login routes */}
                {currentUser ? 
                <ul className="nav justify-content-end">
                    <div className="dropdown">
                    <li className="nav-item dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        {currentUser.data.username}
                    </li>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><NavLink className="dropdown-item" to="/profile">Account</NavLink></li>
                        <li className="dropdown-item" onClick={logout}>Logout</li>
                    </ul>
                    </div>
                </ul>
                :
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink className="m-2" to="/signup">Sign Up</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="m-2" to="/login">Login</NavLink>
                    </li>
                </ul>
                }   
            </div>
        </nav>
        </main>
    )
}

export default Navbar
