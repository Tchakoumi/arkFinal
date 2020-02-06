import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return(
        <nav >
            <div className="container">
                <ul className="right">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/Panier">Panier</a></li>
                    <li><a href="/Forum">Forum</a></li>
                    <li><a href="/Deconnexion">Deconnexion</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;