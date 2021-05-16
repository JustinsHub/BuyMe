import React, {useContext} from 'react'
import AppContext from './AppContext'
import {NavLink} from 'react-router-dom'
import Lottie from 'react-lottie'
import './styles/navbar.css'

const Navbar = () => {
    const {currentUser, logout} = useContext(AppContext)
    //Todo: 
    //fix this on animation
    //hover on links turn logo color
    //Find navbar/brand icon 
    //api for our the website (payment/what are we selling


    const avatarLogo = {
        loop: false,
        autoplay: true,
        animationData: require('./logos/avatarLogo.json'), // the path to the animation json
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <main>
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">BuyMe</NavLink>
                
                {/* if logged in, render username with dropdown else signup/login routes */}
                {currentUser ? 
                <ul className="nav">
                    <div className="dropdown">
                    <li className="nav-item" data-bs-toggle="dropdown">
                        <Lottie options={avatarLogo} height={50} width={50} style={{marginRight: "25px"}}/>
                    </li>
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
                        <li className="dropdown-item" onClick={logout}>Logout</li>
                    </ul>
                    </div>
                </ul>
            
                :
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink className="Navbar-color m-3" to="/signup">Sign Up</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="Navbar-color" to="/login">
                            Login
                        </NavLink>
                    </li>
                </ul>
                }  
            </div>
        </nav>
        </main>
    )
}

export default Navbar
