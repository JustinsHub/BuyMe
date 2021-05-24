import React, {useContext} from 'react'
import AppContext from './AppContext'
import {NavLink} from 'react-router-dom'
import Lottie from 'react-lottie'
import './styles/navbar.css'

const Navbar = () => {
    const {currentUser, logout} = useContext(AppContext) 
    //Todo: 
    //fix buttons and input sizes
    //fixed navbar on scroll
    //fade navbar on scroll // darker color of theme background
    //hover on links turn logo color/background navbar css
    //Find navbar/brand icon 
    //api for our the website (payment/what are we selling?) 
    //cart? // prices of api items
    //fake terms and conditions //already logged in... (register) //
    //while on access/error have a random food joke request for entertainment 

    const avatarLogo = {
        loop: false,
        autoplay: true,
        animationData: require('./styles/logos/avatarLogo.json'), // the path to the animation json
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <main>
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">PICKOUT</NavLink>
                
                {/* if logged in, render username with dropdown else signup/login routes */}
                {currentUser ? 
                <ul className="nav">
                    <div className="dropdown">
                    <li className="nav-item" data-bs-toggle="dropdown">
                        <Lottie options={avatarLogo} height={50} width={50}/>
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
                        <NavLink className="Navbar-color Navbar-hover" to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="Navbar-color Navbar-hover m-3" to="/signup">
                            Get Started
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
