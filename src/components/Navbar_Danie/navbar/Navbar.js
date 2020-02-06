import React from 'react'
import { Link } from 'react-router-dom'
import logo192 from '../../assets/logo192.png'
import SignedInLinks from '../signedInLinks/SignedInLinks'
import "./Navbar.css"

 const Navbar = () => {
        return (
            <nav className="container">
                <div className="wrapper">
                    <Link to='/' className="brand-logo"><img src={logo192} alt="ARK" width="30px" height="30px" /></Link>
                    <div className="links">
                        <SignedInLinks />
                    </div>

                </div>
            </nav>
        )
    }

export default Navbar