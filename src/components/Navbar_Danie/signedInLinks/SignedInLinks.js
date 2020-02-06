import React from 'react'
import { NavLink } from 'react-router-dom'

import "./SignedInLinks.css"

 const SignedInLinks = () => {
    return (
        <div className="right">
            <NavLink to='/' className='Linking'>Se deconnecter</NavLink> 
            <NavLink to='/' className='Linking'>Parametres</NavLink>
            <div class="subnav">
                <NavLink to ="/" class="subnavbtn">Forum</NavLink>
                <div class="subnav-content">
                    <NavLink to='/'>Fournisseur</NavLink>
                    <NavLink to='/'>Client</NavLink> 
                </div>
            </div> 
            <NavLink to='/' className='Linking'>Analyse produits</NavLink>
            <div class="subnav">
                <NavLink to ="/" class="subnavbtn">Presentation</NavLink>
                <div class="subnav-content">
                    <NavLink to='/'>Produit</NavLink>
                    <NavLink to='/'>Fournisseur</NavLink>
                    <NavLink to='/'>Gerant</NavLink>
                    <NavLink to='/'>Livreur</NavLink> 
                </div>
            </div> 
            <NavLink to='/' className='Linking'>Ajout</NavLink>
        </div>
    )
}

export default SignedInLinks